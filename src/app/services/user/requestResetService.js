const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

class PasswordResetRequest {
    constructor() {
        this.JWT_SECRET = process.env.JWT_SECRET;
        this.EMAIL_USER = process.env.EMAIL_USER;
        this.EMAIL_PASS = process.env.EMAIL_PASS;
    }

    async requestReset({ email }) {
        try {
            const token = jwt.sign({ email }, this.JWT_SECRET, { expiresIn: '1h' });
            console.log("Sending email to ---------------", email);
            console.log("Sending email with token  ---------------", token);
            const transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: this.EMAIL_USER,
                    pass: this.EMAIL_PASS,
                }
            });

            const mailOptions = {
                from: this.EMAIL_USER,
                to: 'isaciqo.42@gmail.com', // Você pode querer tornar isso dinâmico
                subject: 'Email Confirmation',
                text: `use this token to reset your email: ${token}`
            };

            return new Promise((resolve, reject) => {
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log('Erro ao enviar e-mail:', error);
                        reject(error);
                    } else {
                        console.log('E-mail enviado com sucesso:', info);
                        console.log('E-mail enviado com sucesso:', info.response);
                        resolve(info);
                    }
                });
            });
        } catch (error) {
            throw error;
        }
    }
}

module.exports = PasswordResetRequest;