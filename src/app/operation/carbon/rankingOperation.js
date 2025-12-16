class RankingOperation {
  constructor({ rankingService }) {
    this.rankingService = rankingService;
  }

  async upsert(payload) {
    return this.rankingService.upsertAndRecalculate(payload);
  }

  async list({ limit }) {
    return this.rankingService.getRanking(limit);
  }
}

module.exports = RankingOperation;