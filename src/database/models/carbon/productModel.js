const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  gtin: { type: String, required: true },
  name: { type: String },
  supplier: { type: String },

  carbonFootprint: {
    total: { type: Number },
    rawMaterial: { type: Number },
    manufacturing: { type: Number },
    transport: { type: Number },
    packaging: { type: Number },
    endOfLife: { type: Number }
  },

  rawMaterial: {
    type: { type: String },      // ← precisa ser objeto { type: String }
    origin: { type: String },
    quantity: { type: String }
  },

  packaging: {
    type: { type: String },      // ← antes dava conflito com "type" do mongoose
    weight: { type: String }
  },

  transport: {
    modal: { type: String },
    distance: { type: String },
    weight: { type: String }
  },

  manufacturingEnergy: { type: String },

  endOfLife: {
    recycling: { type: String },
    landfill: { type: String }
  },

  disposalGuidance: { type: String },

  auditTrail: [{ type: String }]
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
