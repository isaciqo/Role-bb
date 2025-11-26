class GetUserOperation {
    constructor({ getUserByIdService }) {
      this.getUserByIdService = getUserByIdService;
    }
  
    async getUser(user_id) {
      try {
        return await this.getUserByIdService.getUser(user_id);
      } catch (error) {
        throw error;
      }
    }
  }
  
  module.exports = GetUserOperation;