require('dotenv').config();
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      }
    });
  }

  async sendMail({ email, password }) {
    try {
      const token = jwt.sign({ email, password }, process.env.JWT_SECRET, { expiresIn: '1h' });
      console.log("Sending email to ---------------", email);

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'isaciqo.42@gmail.com', // Consider making this dynamic
        subject: 'Email Confirmation',
        text: `Click on the following link to confirm your email: http://localhost:3030/confirm/${token}`
      };

      return new Promise((resolve, reject) => {
        this.transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log('Erro ao enviar e-mail:', error);
            reject(error);
          } else {
            console.log('E-mail enviado com sucesso:', info.response);
            resolve(token);
          }
        });
      });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = EmailService;