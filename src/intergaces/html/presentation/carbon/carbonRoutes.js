const carbonSchema  = require('./carbonSchemas')();

module.exports = [
  {
    method: 'get',
    path: '/qrcode/:qrcodeID',
    handler: 'carbonController.generateQRCode',
    validation: {
      params: carbonSchema.get
    }
  },
  {
    method: 'post',
    path: '/product/create',
    handler: 'carbonController.createProduct',
    validation: { body: carbonSchema.create }
  },
  {
    method: 'get',
    path: '/product/:gtin',
    handler: 'carbonController.getProduct',
    validation: { params: carbonSchema.getByGtin }
  }
];
