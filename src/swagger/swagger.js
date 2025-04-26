// server/src/swagger/swagger.js
import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Link Manager API',
      version: '1.0.0',
      description: 'リンク管理APIの仕様書',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/routes/*.js','./src/swagger/*.js'], // ルーティングファイルにAPIコメントを書くので、そこをスキャンする
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;