import { getAllLinks, createLink ,updateLink, deleteLink} from '../models/linkModel.js';

// 全リンク取得API
export async function getLinks(req, res) {
  try {
    const links = await getAllLinks();
    res.status(200).json(links);
  } catch (err) {
    console.error('リンク取得エラー:', err);
    res.status(500).json({ error: 'リンクの取得に失敗しました' });
  }
}

// 新規リンク登録API
export async function addLink(req, res) {
  const { title, url } = req.body;
  if (!title || !url) {
    return res.status(400).json({ error: 'タイトルとURLは必須です' });
  }
  try {
    const insertId = await createLink(title, url);
    res.status(201).json({ id: insertId, title, url });
  } catch (err) {
    console.error('リンク登録エラー:', err);
    res.status(500).json({ error: 'リンクの登録に失敗しました' });
  }
}

// リンク更新API
export async function updateLinkController(req, res) {
  const { id } = req.params;
  const { title, url } = req.body;
  if (!title || !url) {
    return res.status(400).json({ error: 'タイトルとURLは必須です' });
  }
  try {
    const affectedRows = await updateLink(id, title, url);
    if (affectedRows === 0) {
      return res.status(404).json({ error: '指定されたIDのリンクが見つかりません' });
    }
    res.status(200).json({ id: Number(id), title, url });
  } catch (err) {
    console.error('リンク更新エラー:', err);
    res.status(500).json({ error: 'リンクの更新に失敗しました' });
  }
}

// リンク削除API
export async function deleteLinkController(req, res) {
  const { id } = req.params;
  try {
    const affectedRows = await deleteLink(id);
    if (affectedRows === 0) {
      return res.status(404).json({ error: '指定されたIDのリンクが見つかりません' });
    }
    res.status(204).send();
  } catch (err) {
    console.error('リンク削除エラー:', err);
    res.status(500).json({ error: 'リンクの削除に失敗しました' });
  }
}