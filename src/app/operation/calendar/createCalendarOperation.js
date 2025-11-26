class CreateCalendar {
    constructor({ createCalendarService }) {
        this.createCalendarService = createCalendarService;
      }

    async createCalendar({ createdBy, users, calendarInformation, name, description }) {
      try {
        return await this.createCalendarService.createCalendar({ createdBy, users, calendarInformation, name, description });
      } catch (error) {
        throw error;
      }
    }
  }
  
module.exports = CreateCalendar;