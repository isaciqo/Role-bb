const jwt = require('jsonwebtoken');
const User = require('../../../database/models/user/userModel');
class EmailConfirmation {
    constructor() {
        this.JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';
      }

    async confirmEmail({ token }) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, this.JWT_SECRET, async (error, decoded) => {
                if (error) {
                    reject(new Error('Invalid or expired token'));
                    return;
                }

                try {
                    const { email, password } = decoded;
                    console.log("decode ---- ", email, password);

                    const user = await User.findOne({ email });
                    if (!user) {
                        throw new Error('User not exists');
                    }

                    user.isConfirmed = true;
                    const savedUser = await user.save();
                    console.log(savedUser);

                    resolve('Email confirmed successfully');
                } catch (error) {
                    reject(error);
                }
            });
        });
    }
}

module.exports = EmailConfirmation;