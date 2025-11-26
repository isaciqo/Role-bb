const User = require('../../../database/models/user/userModel');

class UpdateSchedulesCreated {
  async updateSchedulesCreated({ id, schedulesCreated }) {
    try {
      console.log('schedulesCreated---------', schedulesCreated);
      const user = await User.findById(id);
      console.log('schedulesCreated---------', schedulesCreated);
      
      if (!user) {
        throw new Error('User not found');
      }
      
      user.schedulesCreated.push(schedulesCreated);
      console.log(' user.schedulesCreated---------', user.schedulesCreated);
      
      const updatedUser = await user.save();

      return updatedUser;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UpdateSchedulesCreated;