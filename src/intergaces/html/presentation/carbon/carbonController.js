require('dotenv').config();

class UserController {
    constructor({ 
        qrCodeOperation,
        productOperation,
        dashboardOperation,
        rankingOperation
    }) {
        this.qrCodeOperation = qrCodeOperation;
        this.productOperation = productOperation;
        this.dashboardOperation = dashboardOperation;
        this.rankingOperation = rankingOperation;
    }

    async generateQRCode(req, res) {
        try {
            const { qrcodeID } = req.params;

            if (!qrcodeID) {
            return res.status(400).json({ message: 'Missing qrcodeID' });
            }
            const bola = "b"
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

  async createDashboard(req, res) {
    try {
      const result = await this.dashboardOperation.create(req.body);

      return res.status(201).json({
        message: 'Dashboard created successfully',
        data: result
      });
    } catch (error) {
      console.log(error)
      return res.status(400).json({ error: error.message });
    }
  }

  async getDashboard(req, res) {
    try {
      const { user_id } = req.params;

      const result = await this.dashboardOperation.get({ user_id });

      return res.status(200).json(result);
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  }

  async createOrUpdateRanking(req, res) {
    try {
      const result = await this.rankingOperation.upsert(req.body);

      return res.status(201).json({
        message: 'Ranking atualizado com sucesso',
        data: result
      });
    } catch (error) {
      console.error('Error updating ranking:', error);
      return res.status(400).json({ error: error.message });
    }
  }

  async getRanking(req, res) {
    try {
      const result = await this.rankingOperation.list({
        limit: req.query.limit
      });

      return res.status(200).json(result);
    } catch (error) {
      console.error('Error getting ranking:', error);
      return res.status(404).json({ error: error.message });
    }
  }
}

module.exports = UserController;