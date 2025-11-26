const Calendar = require('../../../database/models/calendar/calendarModel');

class GetCalendar {

  async getCalendar({ id }) {
    try {
      const calendar = await Calendar.findOne({ calendar_id: id });

      if (!calendar) {
        throw new Error('Calendar not found');
      }

      return calendar;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = GetCalendar;