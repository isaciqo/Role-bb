const User = require('../../../database/models/user/userModel');

class UpdateSchedulesJoined {
  async updateSchedulesJoined({ user, scheduleJoined }) {
    try {
        console.log('id---------------', user)

        console.log('scheduleJoined---------------', scheduleJoined)
      if ((scheduleJoined.createdBy === user.user_id) 
        || user.schedulesJoined.find((schedule) => schedule.calendar_id === scheduleJoined.calendar_id)) {
        throw new Error(`User can't join this schedule`);
      }

      user.schedulesJoined.push(scheduleJoined);

      const updatedUser = await user.save();

      return updatedUser;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UpdateSchedulesJoined;