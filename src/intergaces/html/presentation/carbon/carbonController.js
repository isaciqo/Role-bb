require('dotenv').config();

class UserController {
    constructor({ 
        qrCodeOperation,
        productOperation
    }) {
        this.qrCodeOperation = qrCodeOperation;
        this.productOperation = productOperation;
    }

    async generateQRCode(req, res) {
        try {
            const { qrcodeID } = req.params;

            if (!qrcodeID) {
            return res.status(400).json({ message: 'Missing qrcodeID' });
            }

            const result = await this.qrCodeOperation.generate({ qrcodeID });

            return res.status(200).json({
            message: 'QR Code gerado com sucesso',
            data: result
            });

        } catch (error) {
            console.error('Error generating QR Code:', error);
            return res.status(500).json({ error: error.message });
        }
    }

    async createProduct(req, res, next) {
    try {
        console.log('chegou no create')
      const result = await this.productOperation.createProduct(req.body);
      res.status(201).json(result);
    } catch (error) {
        console.error('Error:', error);
      return res.status(500).json({ error: error.message });
    }
  }

    async getProduct(req, res, next) {
    try {
      const { gtin } = req.params;
      const result = await this.productOperation.getProduct(gtin);
      res.status(200).json(result);
    } catch (error) {
        console.error('Error:', error);
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = UserController;