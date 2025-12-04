const Product = require('../../../database/models/carbon/productModel');

class ProductService {
  async createProduct(data) {
    const newProduct = new Product(data);
    return await newProduct.save();
  }

  async getProductByGtin(gtin) {
    return await Product.findOne({ gtin });
  }
}

module.exports = ProductService;
