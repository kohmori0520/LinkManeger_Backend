// server/src/routes/linkRoutes.js
import express from 'express';
import { getLinks, addLink, updateLinkController, deleteLinkController } from '../controllers/linkController.js';

const router = express.Router();

// リンク一覧取得
router.get('/', getLinks);

// 新規リンク登録
router.post('/', addLink);

// リンク更新
router.put('/:id', updateLinkController);

// リンク削除
router.delete('/:id', deleteLinkController);

export default router;



