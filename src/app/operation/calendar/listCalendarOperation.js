class ListCalendar {
    constructor({ listCalendarService }) {
      this.listCalendarService = listCalendarService;
    }
  
    async listCalendar({ createdBy }) {
      try {
        return await this.listCalendarService.listCalendar({ createdBy });
      } catch (error) {
        throw error;
      }
    }
  }
  
  module.exports = ListCalendar;