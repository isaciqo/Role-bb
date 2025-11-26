const { v4: uuidv4 } = require('uuid');
const User = require('../../../database/models/user/userModel');
const Calendar = require('../../../database/models/calendar/calendarModel');

class CalendarService {
  async createCalendar({ createdBy, users, calendarInformation, name, description }) {
    try {
      const user = await User.findOne({ user_id: createdBy });
      if (!user) {
        throw new Error('User not found');
      }

      const newCalendar = new Calendar({
        calendar_id: uuidv4(),
        createdBy,
        users,
        calendarInformation,
        name,
        description
      });

      const schedulesInformation = {
        calendar_id: newCalendar.calendar_id,
        name,
        description
      };

      user.schedulesCreated.push(schedulesInformation);
      await user.save();

      console.log('calendar in service createCalendar', newCalendar);
      const savedCalendar = await newCalendar.save();
      return savedCalendar;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CalendarService;