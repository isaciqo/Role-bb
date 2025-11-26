const Joi = require('joi');

module.exports = () => ({
    create: Joi.object({
        name: Joi.string(),
        description: Joi.string(),
        createdBy: Joi.string(),
        users: Joi.array(),
        calendarInformation: Joi.array(),
    }),

    login: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
    }),

    updateSchedulesJoined: Joi.object({
        id: Joi.string()
    }),

    bodyUpdateSchedulesJoined: Joi.object({
        user_id: Joi.string()
    }),
    
    deleteSchedules: Joi.object({
        id: Joi.string()
    }),

    bodyDeleteSchedules: Joi.object({
        user_id: Joi.string()
    }),
       

});