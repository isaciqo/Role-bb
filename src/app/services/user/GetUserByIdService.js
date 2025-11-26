
const User = require('../../../database/models/user/userModel');

class GetUserByIdService {
    async getUser(user_id) {
        try {
            const user = await User.findOne({ user_id });
            console.log('returned User------', user);

            return user;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = GetUserByIdService;