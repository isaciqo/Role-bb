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
    }),

    createDashboard: Joi.object({
        user_id: Joi.string().required(),

        totalFootprint: Joi.number().required(),          // kg CO₂ total
        productsConsumed: Joi.number().integer().required(),
        reductionAchieved: Joi.number().required(),

        ranking: Joi.object({
        position: Joi.number().integer().required(),
        total: Joi.number().integer().required(),
        cityAverage: Joi.number().required(),
        stateAverage: Joi.number().required(),
        countryAverage: Joi.number().required()
        }).required(),

        monthlyData: Joi.array()
        .items(
            Joi.object({
            month: Joi.string().required(),              // "Jan", "Fev", etc
            footprint: Joi.number().required()           // kg CO₂
            })
        )
        .min(1)
        .required(),

        actions: Joi.array()
        .items(Joi.string())
        .required()
    }),

    getDashboard: Joi.object({
        user_id: Joi.string().required()
    }),

    rankingUpsert: Joi.object({
        user_id: Joi.string().required(),
        name: Joi.string().required(),
        value: Joi.number().required()
    }),

    getRanking: Joi.object({
        city: Joi.string()
    }),
});