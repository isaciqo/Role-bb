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
  },
  {
  method: 'post',
  path: '/dashboard',
  handler: 'carbonController.createDashboard',
  validation: { body: carbonSchema.createDashboard }
},
{
  method: 'get',
  path: '/dashboard/:user_id',
  handler: 'carbonController.getDashboard',
  validation: { params: carbonSchema.getDashboard }
},{
    method: 'post',
    path: '/ranking',
    handler: 'carbonController.createOrUpdateRanking',
    validation: { body: carbonSchema.rankingUpsert }
  },
  {
    method: 'get',
    path: '/ranking',
    handler: 'carbonController.getRanking',
    validation: { params: carbonSchema.getRanking }
  }
];
