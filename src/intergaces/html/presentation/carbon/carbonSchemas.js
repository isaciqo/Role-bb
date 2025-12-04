const Joi = require('joi');

module.exports = () => ({
    get: Joi.object({
        qrcodeID: Joi.string().min(3).max(30).required(),
    }),

    create: Joi.object({
        gtin: Joi.string().required(),
        name: Joi.string().required(),
        supplier: Joi.string().required(),

        carbonFootprint: Joi.object({
        total: Joi.number().required(),
        rawMaterial: Joi.number().required(),
        manufacturing: Joi.number().required(),
        transport: Joi.number().required(),
        packaging: Joi.number().required(),
        endOfLife: Joi.number().required(),
        }),

        rawMaterial: Joi.object({
        type: Joi.string().required(),
        origin: Joi.string().required(),
        quantity: Joi.string().required(),
        }),

        packaging: Joi.object({
        type: Joi.string().required(),
        weight: Joi.string().required(),
        }),

        transport: Joi.object({
        modal: Joi.string().required(),
        distance: Joi.string().required(),
        weight: Joi.string().required(),
        }),

        manufacturingEnergy: Joi.string().required(),

        endOfLife: Joi.object({
        recycling: Joi.string().required(),
        landfill: Joi.string().required(),
        }),

        disposalGuidance: Joi.string().required(),
            auditTrail: Joi.array().items(Joi.string()).required(),
        }),

        getByGtin: Joi.object({
            gtin: Joi.string().required()
        })
});