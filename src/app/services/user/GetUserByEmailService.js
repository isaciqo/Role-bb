
const User = require('../../../database/models/user/userModel');

class GetUserByIdService {
    async getUser(email) {
        try {
            const user = await User.findOne({ email });
            console.log('returned User------', user);

            return user;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = GetUserByIdService;