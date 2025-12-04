const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

class GetQRCodeService {

  async generateQRCode({ qrcodeID }) {
    try {
      const link = `http://localhost:8080/passaporte/1`;

      const filePath = path.join(__dirname, '../../../', `qrcode_${qrcodeID}.png`);

      await QRCode.toFile(filePath, link, {
        errorCorrectionLevel: 'L',
        margin: 1,
        width: 200, // abaixo disso pode falhar para links maiores
      });

      return {
        message: 'QR Code gerado e salvo na raiz do projeto',
        filePath,
        link
      };

    } catch (error) {
      throw new Error(`Erro ao gerar QR Code: ${error.message}`);
    }
  }
}

module.exports = GetQRCodeService;
