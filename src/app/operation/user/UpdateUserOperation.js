class UserOperation {
    constructor({ sendEmailService, hashPasswordService, createUserService, getUserByEmailService }) {
      this.sendEmailService = sendEmailService;
      this.hashPasswordService = hashPasswordService;
      this.createUserService = createUserService;
      this.getUserByEmailService = getUserByEmailService;
    }
  
    async updateUser({ email, name, nick_name }) {
      try {

        const user = await this.getUserByEmailService.getUser(email);

        if(!user){
          throw new Error('User not found');
        }
        
        user.name = name;
        user.nick_name = nick_name;

        return await user.save();
      } catch (error) {
        throw error;
      }
    }
  }
  
  module.exports = UserOperation;