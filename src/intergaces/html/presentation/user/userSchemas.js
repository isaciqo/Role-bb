const Joi = require('joi');

module.exports = () => ({
    create: Joi.object({
        name: Joi.string().min(3).max(30).required(),
        nick_name: Joi.string().min(3).max(30).required(),
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
    }),

    updateUser: Joi.object({
        name: Joi.string().min(3).max(30).required(),
        nick_name: Joi.string().min(3).max(30).required(),
        email: Joi.string().email().required(),
    }),

    login: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
    }),

    getUser: Joi.object().keys({ 
        user_id: Joi.string().required(),
    }),

    confirmEmail: Joi.object().keys({ 
        token: Joi.string().required(),
    }),

    requestReset: Joi.object().keys({ 
        email: Joi.string().email().required()
    }),

    confirmReset: Joi.object().keys({ 
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
    }),

    changePassword: Joi.object().keys({
        email: Joi.string().email().required(),
        oldPassword: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        newPassword: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
    })
});