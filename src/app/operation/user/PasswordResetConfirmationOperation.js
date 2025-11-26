class PasswordResetConfirmation {
    constructor({ passwordResetConfirmationService, hashPasswordService }) {
        this.passwordResetConfirmationService = passwordResetConfirmationService;
        this.hashPasswordService = hashPasswordService;
    }

    async confirmReset({ token, password }) {
        try {
            const hashPassword = await this.hashPasswordService.hashPassword(password)
            return await this.passwordResetConfirmationService.confirmReset({ token, password: hashPassword });
        } catch (error) {
            throw error;
        }
    }
}

module.exports = PasswordResetConfirmation;