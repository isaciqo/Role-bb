class ProductOperation {
  constructor({ productService }) {
    this.productService = productService;
  }

  async createProduct(payload) {
    const exists = await this.productService.getProductByGtin(payload.gtin);
    if (exists) throw new Error("GTIN already exists");

    return await this.productService.createProduct(payload);
  }

  async getProduct(gtin) {
    const product = await this.productService.getProductByGtin(gtin);
    if (!product) throw new Error("Product not found");
    return product;
  }
}

module.exports = ProductOperation;
