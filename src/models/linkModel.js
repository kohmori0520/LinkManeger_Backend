import pool from "../config/db.js";

export async function getAllLinks() {
  const [rows] = await pool.query('select * from links order by timestamp desc');
  return rows
}

export async function createLink(title, url) {
  const [result] = await pool.query(
    'INSERT INTO links (title, url) VALUES (?, ?)',
    [title, url]
  );
  return result.insertId;
}

export async function updateLink(id, title, url) {
  const [result] = await pool.query(
    'UPDATE links SET title = ?, url = ? WHERE id = ?',
    [title, url, id]
  );
  return result.affectedRows;
}

export async function deleteLink(id) {
  const [result] = await pool.query(
    'DELETE FROM links WHERE id = ?',
    [id]
  );
  return result.affectedRows;
}
