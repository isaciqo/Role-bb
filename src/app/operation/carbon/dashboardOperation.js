class DashboardOperation {
  constructor({ dashboardService }) {
    this.dashboardService = dashboardService;
  }

  async create({ user_id, footprint, month, actions }) {
    return await this.dashboardService.saveDashboardData({
      user_id,
      footprint,
      month,
      actions
    });
  }

  async get({ user_id }) {
    return await this.dashboardService.getDashboardData({ user_id });
  }
}

module.exports = DashboardOperation;
