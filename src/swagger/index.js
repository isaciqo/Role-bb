const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const joiSwaggerSchemas = require("./JoiSchemas");

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Minha API',
      version: '1.0.0',
      description: 'Documentação da API gerada automaticamente',
    },
    components: {
      schemas: joiSwaggerSchemas,
    },
  },
  // Aqui ficam os caminhos dos seus arquivos de rotas com @openapi
  apis: [
    './src/intergaces/html/presentation/user/*.js',
    './src/intergaces/html/presentation/Calendar/*.js',
    './src/swagger/*.js',            // <= add isso se os schemas estiverem aqui
    './src/**/*.js',                 // <= opção mais simples (varre tudo)
  ],

};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app) {
  // Rota do Swagger
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  console.log('📘 Swagger disponível em: http://localhost:3000/api-docs');
}

module.exports = swaggerDocs;
