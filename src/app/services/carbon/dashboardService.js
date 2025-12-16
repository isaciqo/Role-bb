const Dashboard = require('../../../database/models/carbon/dashboardModel');
class DashboardService {

  async saveDashboardData({ user_id, footprint, month, actions }) {


    const ranking = {
        "position": 0,
        "total": 0,
        "cityAverage": 25,
        "stateAverage": 28,
        "countryAverage": 30
    }
    const data = {
        user_id, totalFootprint: footprint, monthlyData: month, actions, ranking
    }

    
    const dashboard = await Dashboard.create(data);

    return dashboard;
  }

  async getDashboardData({ user_id }) {
    const dashboard = await Dashboard.findOne({ user_id });

    if (!dashboard) {
      throw new Error('Dashboard not found');
    }

    console.log({dashboard})
    const monthlyData = [
      { month: 'Jan', footprint: 22 },
      { month: 'Fev', footprint: 18 },
      { month: 'Mar', footprint: 15 }
    ];

    const totalFootprint = monthlyData.reduce(
      (sum, item) => sum + item.footprint,
      0
    );

    // return {
    //   totalFootprint,
    //   productsConsumed: 12,
    //   reductionAchieved: 8,
    //   ranking: {
    //     position: 15,
    //     total: 120,
    //     cityAverage: 25,
    //     stateAverage: 28,
    //     countryAverage: 30
    //   },
    //   monthlyData,
    //   actions: [
    //     'Usou transporte público',
    //     'Comprou produto local',
    //     'Reduziu consumo de plástico'
    //   ]
    // };

    return dashboard
  }
}

module.exports = DashboardService;
