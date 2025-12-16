const mongoose = require('mongoose');

const monthlyDataSchema = new mongoose.Schema({
  month: { type: String },
  footprint: { type: Number }
}, { _id: false });

const dashboardSchema = new mongoose.Schema(
  {
    user_id: { type: String, index: true },

    totalFootprint: { type: Number },
    productsConsumed: { type: Number },
    reductionAchieved: { type: Number, default: 0 },

    ranking: {
      position: { type: Number },
      total: { type: Number },
      cityAverage: { type: Number },
      stateAverage: { type: Number },
      countryAverage: { type: Number }
    },

    monthlyData: [monthlyDataSchema],

    actions: [{ type: String }]
  },
  { timestamps: true }
);

module.exports = mongoose.model('Dashboard', dashboardSchema);
