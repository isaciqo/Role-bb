class UpdateCalendar {
    constructor({ updateCalendarService }) {
      this.updateCalendarService = updateCalendarService;
    }
  
    async updateCalendar({ id, calendarInformation }) {
      try {
        return await this.updateCalendarService.updateCalendar({ id, calendarInformation });
      } catch (error) {
        throw error;
      }
    }
  }
  
  module.exports = UpdateCalendar;