const User = require('../../../database/models/user/userModel');
const Calendar = require('../../../database/models/calendar/calendarModel');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

class UserService {
  constructor() {
    this.JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';
  }

  async createUser({ email, name, nick_name, password }) {
    try {
      const newUser = new User({
        user_id: uuidv4(),
        email,
        name,
        nick_name,
        password,
        isConfirmed: true
      });
      const savedUser = await newUser.save();
      return savedUser;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserService;