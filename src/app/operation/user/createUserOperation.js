class UserOperation {
    constructor({ sendEmailService, hashPasswordService, createUserService, getUserByEmailService, dashboardService }) {
      this.sendEmailService = sendEmailService;
      this.hashPasswordService = hashPasswordService;
      this.createUserService = createUserService;
      this.getUserByEmailService = getUserByEmailService;
      this.dashboardService = dashboardService;
    }
  
    async createUser({ email, name, nick_name, password }) {
      try {

        const user = await this.getUserByEmailService.getUser(email);

        if(user){
          throw new Error('Email already in use');
        }

        const hashedPassword = await this.hashPasswordService.hashPassword(password);
  
        // this.sendEmailService.sendMail({ email, name, nick_name, password });
        
        const userCreate = await this.createUserService.createUser({ 
          email, 
          name, 
          nick_name, 
          password: hashedPassword 
        });



        const monthlyData = [
          { month: 'Out', footprint: 0 },
          { month: 'Nov', footprint: 0 },
          { month: 'Dez', footprint: 0 }
        ];

        const totalFootprint = 0

        const actions = [
          'Usou transporte público',
          'Comprou produto local',
          'Reduziu consumo de plástico'
        ]



        await this.dashboardService.saveDashboardData({
          user_id: userCreate.user_id,
          footprint: totalFootprint,
          month: monthlyData,
          actions     
         })
        return userCreate
      } catch (error) {
        throw error;
      }
    }
  }
  
  module.exports = UserOperation;