class RequestReset {
    constructor({ requestResetService, getUserByEmailService }) {
        this.requestResetService = requestResetService;
        this.getUserByEmailService = getUserByEmailService
    }

    async requestReset({ email }) {
        try {
            const user = await this.getUserByEmailService.getUser(email);

            if(!user){
                throw new Error('Email not found');
            }

            return await this.requestResetService.requestReset({ email });
        } catch (error) {
            throw error;
        }
    }
}

module.exports = RequestReset;