const jwt = require('jsonwebtoken');
require('dotenv').config();

class TokenGenerator {
    constructor() {
        this.JWT_SECRET = process.env.JWT_SECRET;
    }
    
    async generateToken(email) {
        return jwt.sign({ email }, this.JWT_SECRET, { expiresIn: '60m' });
    }
}

module.exports = TokenGenerator;