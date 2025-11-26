class ChangePasswordOperation {
    constructor({ sendEmailService, hashPasswordService, createUserService, getUserByEmailService }) {
      this.sendEmailService = sendEmailService;
      this.hashPasswordService = hashPasswordService;
      this.createUserService = createUserService;
      this.getUserByEmailService = getUserByEmailService;
    }
  
    async changePassword({ oldPassword, newPassword, email }) {
      try {

        const hashOldPassword = await this.hashPasswordService.hashPassword(oldPassword)
        const hashNewPassword = await this.hashPasswordService.hashPassword(newPassword)

        const user = await this.getUserByEmailService.getUser(email);

        if(!user){
          throw new Error('User not found');
        }

        if (!(user.password === hashOldPassword)) {
          throw new Error('Authentication failed');
      }
        
        user.password === hashNewPassword

        return await user.save();
      } catch (error) {
        throw error;
      }
    }
  }
  
  module.exports = ChangePasswordOperation;