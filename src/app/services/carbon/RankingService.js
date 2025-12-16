const Ranking = require('../../../database/models/carbon/rankingModel');
const Dashboard = require('../../../database/models/carbon/dashboardModel');

class RankingService {
  async upsertAndRecalculate({ user_id, name, value }) {

    const numericValue = Number(value) || 0;

    // 1. Buscar ranking existente
    const existing = await Ranking.findOne({ user_id });

    let updatedValue = numericValue;

    if (existing) {
      updatedValue = existing.value + numericValue;
    }

    // 2. Criar ou atualizar ranking
    await Ranking.findOneAndUpdate(
      { user_id },
      {
        user_id,
        name,
        value: updatedValue
      },
      { upsert: true, new: true }
    );

    // 3. Reordenar ranking
    const rankingList = await Ranking.find({})
      .sort({ value: 1 })
      .select('_id');

    const bulkOps = rankingList.map((item, index) => ({
      updateOne: {
        filter: { _id: item._id },
        update: { position: index + 1 }
      }
    }));

    if (bulkOps.length) {
      await Ranking.bulkWrite(bulkOps);
    }

    // 4. Ranking final do usuário
    const finalRanking = await Ranking.findOne({ user_id });

    // 5. Total de usuários no ranking
    const totalUsersInRanking = await Ranking.countDocuments();

    // 6. 🔥 Atualizar Dashboard + monthlyData[Dez]
    const dashboard = await Dashboard.findOne({ user_id });

    if (!dashboard) {
      throw new Error('Dashboard not found for ranking update');
    }

    const month = 'Dez';

    // Procurar mês existente
    const monthIndex = dashboard.monthlyData.findIndex(
      item => item.month === month
    );

    if (monthIndex >= 0) {
      dashboard.monthlyData[monthIndex].footprint += numericValue;
    } else {
      dashboard.monthlyData.push({
        month,
        footprint: numericValue
      });
    }

    // Atualizar totais e ranking no dashboard
    dashboard.totalFootprint = finalRanking.value;              // pegada do usuário
    dashboard.ranking.position = finalRanking.position;         // posição no ranking
    dashboard.ranking.total = totalUsersInRanking;              // 👈 TOTAL DE USUÁRIOS

    await dashboard.save();

    return finalRanking;
  }

  async getRanking(limit = 50) {
    return Ranking.find({})
      .sort({ position: 1 })
      .limit(limit);
  }
}

module.exports = RankingService;
