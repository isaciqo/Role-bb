const Calendar = require('../../../database/models/calendar/calendarModel');

class ListCalendar {
  async listCalendar({ createdBy }) {
    try {
      const calendars = await Calendar.find({ createdBy: "82d03ff1-f71f-4d8b-979c-c6edb5e753d5"  });
        console.log('calendars-----------', calendars)
      if (!calendars.length) {
        throw new Error('No calendars found for the specified user');
      }

      return calendars;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ListCalendar;