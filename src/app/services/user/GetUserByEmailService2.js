const QRCode = require('qrcode');

class GetQRCodeService {

  async generateQRCode({ id }) {
    try {
      const link = `https://www.youtube.com/watch?v=DmC2QQESN6E`;

      const qrBase64 = await QRCode.toDataURL(link);

      return {
        id,
        link,
        qrCode: qrBase64
      };

    } catch (error) {
      throw new Error(`Erro ao gerar QR Code: ${error.message}`);
    }
  }
}

module.exports = GetQRCodeService;
