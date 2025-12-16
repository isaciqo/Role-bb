const mongoose = require('mongoose');

const rankingSchema = new mongoose.Schema(
  {
    user_id: { type: String, index: true },
    name: { type: String, required: true },
    value: { type: Number, required: true }, // ex: pegada de carbono total
    position: { type: Number }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Ranking', rankingSchema);
