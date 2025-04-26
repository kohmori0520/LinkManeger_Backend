import express from 'express';
import dotenv from 'dotenv';
import linkRoutes from './routes/linkRoutes.js'
import pool from './config/db.js';
import swaggerSpec from './swagger/swagger.js';
import swaggerUi from 'swagger-ui-express'
import cors from 'cors';
dotenv.config();

const app = express();
app.use(cors());
const port = process.env.PORT;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());

app.use('/api/links',linkRoutes);

app.get('/api/health',async (req,res) => {
  try {
    const connection = await pool.getConnection();
    await connection.ping();
    connection.release();
    res.status(200).send('データベースへの接続が成功しました。');
  }
  catch (err) {
    console.error(err);
    res.status(500).send('データベースへの接続に失敗しました。')
  }
});

app.listen(port,() => {
  console.log(`Server is Running on port ${port}`);
});