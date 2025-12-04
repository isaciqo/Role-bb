require('dotenv').config();

class UserController {
    constructor({ createUserOperation, 
        loginOperation, 
        emailConfirmationOperation, 
        requestResetOperation, 
        passwordResetConfirmationOperation, 
        getUserOperation,
        updateUserOperation,
        changePasswordOperation
    }) {
        this.createUserOperation = createUserOperation;
        this.loginOperation = loginOperation;
        this.emailConfirmationOperation = emailConfirmationOperation;
        this.requestResetOperation = requestResetOperation;
        this.passwordResetConfirmationOperation = passwordResetConfirmationOperation;
        this.getUserOperation = getUserOperation;
        this.updateUserOperation = updateUserOperation;
        this.changePasswordOperation = changePasswordOperation
    }

    async generateQRCode(req, res) {
        try {
            const { id } = req.params;

            if (!id) {
            return res.status(400).json({ message: 'Missing id' });
            }

            const result = await this.getQRCodeOperation.generate({ id });

            return res.status(200).json({
            message: 'QR Code gerado com sucesso',
            data: result
            });

        } catch (error) {
            console.error('Error generating QR Code:', error);
            return res.status(500).json({ error: error.message });
        }
    }


    async createUser(req, res) {
        try {
            console.log("Create User ---- ")
            const { email, name, nick_name, password,  } = req.body;
            const newUser = await this.createUserOperation.createUser({ email, name, nick_name, password });
            res.status(201).json(newUser);
        } catch (error) {
            console.error('Error creating user:', error);
            res.status(400).json({
                message: error.message // "Email já usado"
            })
        }
    }

    async confirmEmail(req, res) {
        const { token } = req.params;
        await this.emailConfirmationOperation.confirmEmail({ token });
        res.status(200).send('Email confirmed and user created');
    }

    async updateUser(req, res) {
        try {
            const { email, name, nick_name } = req.body;
            await this.updateUserOperation.updateUser({ email, name, nick_name });
            res.status(200).send('User updated');
        } catch (error){
            console.error('Error creating user:', error);
            res.status(404).json({
                message: error.message // "Email já usado"
            })
        }
    }

    async changePassword(req, res) {
        try {
            const { oldPassword, newPassword, email } = req.body;
            await this.changePasswordOperation.changePassword({ oldPassword, newPassword, email });
            res.status(200).send('User updated');
        } catch (error){
            console.error('Error creating user:', error);
            res.status(404).json({
                message: error.message // "Email já usado"
            })
        }
    }

    async requestReset(req, res) {
        try {
            const { email } = req.params;
            await this.requestResetOperation.requestReset({ email });
            res.status(200).send('Email reset created');
        } catch (error){
            console.error('Error creating user:', error);
            res.status(404).json({
                message: error.message // "Email já usado"
            })
        }
    }

    async confirmReset(req, res) {
        const { token } = req.params;
        const { password } = req.body;
        await this.passwordResetConfirmationOperation.confirmReset({ token, password });
        res.status(200).send('password reseted');
    }

    async loginUser(req, res) {
        const { email, password } = req.body;
      
        try {
            const token = await this.loginOperation.loginUser( email, password );
            res.json(token);
        } catch (err) {
            console.log('err------', err)
            res.status(401).json({ message: err.message });
        }
    }

    async getUser(req, res) {
        const { user_id} = req.params;
      
        try {
            const user = await this.getUserOperation.getUser( user_id );
            res.json(user);
        } catch (err) {
            console.log('err------', err)
            res.status(401).json({ message: err.message });
        }
    }
}

module.exports = UserController;