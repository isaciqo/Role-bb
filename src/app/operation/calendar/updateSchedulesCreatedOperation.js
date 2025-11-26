class UpdateSchedulesCreated {
    constructor({ updateSchedulesCreatedService }) {
      this.updateSchedulesCreatedService = updateSchedulesCreatedService;
    }
  
    async updateSchedulesCreated({ id, schedulesCreated }) {
      try {
        return await this.updateSchedulesCreatedService.updateSchedulesCreated({ id, schedulesCreated });
      } catch (error) {
        throw error;
      }
    }
  }
  
  module.exports = UpdateSchedulesCreated;