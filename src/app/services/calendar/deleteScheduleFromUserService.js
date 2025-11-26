const User = require('../../../database/models/user/userModel');

class DeleteScheduleFromUser {
  async deleteUserCalendar({ scheduleToDelete, user, isCalendarOwner }) {
    try {
        let calendarIndex
        isCalendarOwner ?
            calendarIndex = user.schedulesCreated.findIndex(
                calendar => calendar._id === scheduleToDelete.calendar_id
            ):
            calendarIndex = user.schedulesJoined.findIndex(
                calendar => calendar._id === scheduleToDelete.calendar_id
            )

      // Encontra o índice do calendário no array
      if (calendarIndex === -1) {
        throw new Error('Calendar not found for this user');
      }

      // Remove o calendário do array
      isCalendarOwner ?
        user.schedulesCreated.splice(calendarIndex, 1):
        user.schedulesJoined.splice(calendarIndex, 1);
      
      await user.save();
    } catch (error) {
      throw error;
    }
  }
}

module.exports = DeleteScheduleFromUser;