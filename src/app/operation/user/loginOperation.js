class LoginOperation {
    constructor({ hashPasswordService, validateLoginService, tokenGeneratorService }) {
        this.hashPasswordService = hashPasswordService;
        this.validateLoginService = validateLoginService;
        this.tokenGeneratorService = tokenGeneratorService;
    }

    async loginUser(email, password) {
        try {
            const hashedPassword = await this.hashPasswordService.hashPassword(password);
            const response = await this.validateLoginService.validateUser(email, hashedPassword);
            
            response.token = await this.tokenGeneratorService.generateToken(email);
            return response;

        } catch (error) {
            console.log('error', error);
            throw error;
        }
    }
}

module.exports = LoginOperation;