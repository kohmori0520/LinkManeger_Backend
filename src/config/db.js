// server/src/config/db.js
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: { rejectUnauthorized: false }
});

// 接続確認用（開発中だけ）
(async () => {
  try {
    const client = await pool.connect();
    console.log('データベースに接続しました。ID:', client.processID);
    client.release();
  } catch (err) {
    console.error('データベース接続エラー:', err.stack);
  }
})();

export default pool;