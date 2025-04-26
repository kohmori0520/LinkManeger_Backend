import pool from "../config/db.js";

export async function getAllLinks() {
  const result = await pool.query('SELECT * FROM links ORDER BY timestamp DESC');
  return result.rows;
}

export async function createLink(title, url) {
  const result = await pool.query(
    'INSERT INTO links (title, url) VALUES ($1, $2) RETURNING id',
    [title, url]
  );
  return result.rows[0].id;
}

export async function updateLink(id, title, url) {
  const result = await pool.query(
    'UPDATE links SET title = $1, url = $2 WHERE id = $3',
    [title, url, id]
  );
  return result.rowCount;
}

export async function deleteLink(id) {
  const result = await pool.query(
    'DELETE FROM links WHERE id = $1',
    [id]
  );
  return result.rowCount;
}
