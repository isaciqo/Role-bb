const Calendar = require('../../../database/models/calendar/calendarModel');

class DeleteCalendar {
  async deleteCalendar({ scheduleToDelete, user }) {
    try {
      // Primeiro verifica se o calendário existe
      const calendar = await Calendar.findOne({ calendar_id: scheduleToDelete.calendar_id });
      
      if (!calendar) {
        throw new Error('Calendar not found');
      }

      // Se existir, deleta o calendário
      await Calendar.deleteOne({ calendar_id: id });

      return { success: true, message: 'Calendar deleted successfully', deletedId: id };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = DeleteCalendar;