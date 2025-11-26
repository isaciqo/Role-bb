const { expressjwt } = require('express-jwt');

const JWT_SECRET = 'your_secret_key'; // Use uma chave secreta forte

const requireAuth = expressjwt({
  secret: JWT_SECRET,
  algorithms: ['HS256'],
});

module.exports = requireAuth;