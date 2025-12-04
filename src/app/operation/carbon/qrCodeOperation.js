class GetQRCodeOperation {
  constructor({ qrCodeService }) {
    this.qrCodeService = qrCodeService;
  }

  async generate({ qrcodeID }) {
    try {
      return await this.qrCodeService.generateQRCode({ qrcodeID });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = GetQRCodeOperation;
