class UpdateSchedulesJoined {
    constructor({ updateSchedulesJoinedService, getCalendarService, getUserByIdService }) {
      this.updateSchedulesJoinedService = updateSchedulesJoinedService;
      this.getCalendarService = getCalendarService;
      this.getUserByIdService = getUserByIdService;
    }
  
    async updateSchedulesJoined({ id, user_id }) {
      try {
        const scheduleJoined = await this.getCalendarService.getCalendar({ id });
        const user = await this.getUserByIdService.getUser(user_id)
        return this.updateSchedulesJoinedService.updateSchedulesJoined({ scheduleJoined, user });
      } catch (error) {
        throw error;
      }
    }
  }
  
  module.exports = UpdateSchedulesJoined;