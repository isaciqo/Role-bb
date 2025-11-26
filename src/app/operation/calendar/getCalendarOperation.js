class GetCalendar {
    constructor({ getCalendarService }) {
      this.getCalendarService = getCalendarService;
    }
  
    async getCalendar({ id }) {
      try {
        return await this.getCalendarService.getCalendar({ id });
      } catch (error) {
        throw error;
      }
    }
  }
  
  module.exports = GetCalendar;