const jwt = require('jsonwebtoken');
const User = require('../../../database/models/user/userModel');

class PasswordResetConfirmation {
    constructor(jwtSecret) {
        this.JWT_SECRET = process.env.JWT_SECRET;
    }

    async confirmReset({ token, password }) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, this.JWT_SECRET, async (error, decoded) => {
                if (error) {
                    console.log('error--------------------------',error)
                    reject(new Error('Invalid or expired token'));
                    return;
                }

                try {
                    const { email } = decoded;
                    const user = await User.findOne({ email });
                    
                    if (!user) {
                        throw new Error('User not exists');
                    }

                    user.password = password;
                    await user.save();
                    resolve('Password reset successful');
                } catch (error) {
                    reject(error);
                }
            });
        });
    }
}

module.exports = PasswordResetConfirmation;