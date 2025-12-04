class UserOperation {
    constructor({ sendEmailService, hashPasswordService, createUserService, getUserByEmailService }) {
      this.sendEmailService = sendEmailService;
      this.hashPasswordService = hashPasswordService;
      this.createUserService = createUserService;
      this.getUserByEmailService = getUserByEmailService;
    }
  
    async createUser({ email, name, nick_name, password }) {
      try {

        const user = await this.getUserByEmailService.getUser(email);

        if(user){
          throw new Error('Email already in use');
        }

        const hashedPassword = await this.hashPasswordService.hashPassword(password);
  
        // this.sendEmailService.sendMail({ email, name, nick_name, password });
        
        return await this.createUserService.createUser({ 
          email, 
          name, 
          nick_name, 
          password: hashedPassword 
        });
      } catch (error) {
        throw error;
      }
    }
  }
  
  module.exports = UserOperation;