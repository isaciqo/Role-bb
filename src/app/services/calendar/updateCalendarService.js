const Calendar = require('../../../database/models/calendar/calendarModel');

class UpdateCalendar {
  async updateCalendar({ id, calendarInformation }) {
    try {
      const calendar = await Calendar.findOne({ calendar_id: id });

      if (!calendar) {
        throw new Error('Calendar not found');
      }

      calendar.calendarInformation.push(calendarInformation);
      console.log('calendar -------------', calendar);

      const updatedCalendar = await calendar.save();

      return updatedCalendar;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UpdateCalendar;