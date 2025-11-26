class EmailConfirmation {
    constructor({ emailConfirmationService }) {
        this.emailConfirmationService = emailConfirmationService;
    }

    async confirmEmail({ token }) {
        try {
            return await this.emailConfirmationService.confirmEmail({ token });
        } catch (error) {
            throw error;
        }
    }
}

module.exports = EmailConfirmation;