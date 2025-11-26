const crypto = require('crypto');

class HashPasswordService {
  async hashPassword(password) {
    return crypto.createHash('sha256').update(password).digest('hex');
  }

  // Método alternativo usando bcrypt (comentado no código original)
  // async hashPassword(password) {
  //   const bcrypt = require('bcrypt');
  //   const salt = await bcrypt.genSalt(10);
  //   return bcrypt.hash(password, salt);
  // }
}

module.exports = HashPasswordService;