class UpdateSchedulesJoined {
    constructor({ updateSchedulesJoinedService, getCalendarService, getUserByIdService, deleteCalendarService, deleteScheduleFromUserService }) {
      this.updateSchedulesJoinedService = updateSchedulesJoinedService;
      this.getCalendarService = getCalendarService;
      this.getUserByIdService = getUserByIdService;
      this.deleteCalendarService = deleteCalendarService
      this.deleteScheduleFromUserService = deleteScheduleFromUserService
    }
  
    async deleteSchedules({ id, user_id }) {
      try {
        const scheduleToDelete = await this.getCalendarService.getCalendar({ id });
        const user = await this.getUserByIdService.getUser(user_id)
        
        scheduleToDelete.createdBy === user_id ? 
        (
            await this.deleteScheduleFromUserService.deleteUserCalendar({ scheduleToDelete, user, isCalendarOwner: true }),
            await this.deleteCalendarService.deleteCalendar({ scheduleToDelete, user })
        ):
            await this.deleteScheduleFromUserService.deleteUserCalendar({ scheduleToDelete, user, isCalendarOwner: false })
      } catch (error) {
        throw error;
      }
    }
  }
  
  module.exports = UpdateSchedulesJoined;