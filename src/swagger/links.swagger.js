/**
 * @swagger
 * /api/links:
 *   get:
 *     summary: 登録されている全リンクを取得
 *     tags:
 *       - Links
 *     responses:
 *       200:
 *         description: リンク一覧を返します
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: リンクのID
 *                   title:
 *                     type: string
 *                     description: リンクのタイトル
 *                   url:
 *                     type: string
 *                     description: リンクのURL
 *                   timestamp:
 *                     type: string
 *                     format: date-time
 *                     description: 登録日時
 *       500:
 *         description: サーバー内部エラー
 */

/**
 * @swagger
 * /api/links:
 *   post:
 *     summary: 新しいリンクを登録
 *     tags:
 *       - Links
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - url
 *             properties:
 *               title:
 *                 type: string
 *                 description: リンクのタイトル
 *               url:
 *                 type: string
 *                 description: リンクのURL
 *     responses:
 *       201:
 *         description: リンク登録成功
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 id:
 *                   type: integer
 *       400:
 *         description: リクエストボディが不正
 *       500:
 *         description: サーバー内部エラー
 */

/**
 * @swagger
 * /api/links/{id}:
 *   put:
 *     summary: 指定したリンクを更新
 *     tags:
 *       - Links
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: 更新対象リンクのID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - url
 *             properties:
 *               title:
 *                 type: string
 *                 description: 新しいタイトル
 *               url:
 *                 type: string
 *                 description: 新しいURL
 *     responses:
 *       200:
 *         description: リンク更新成功
 *       400:
 *         description: リクエストボディが不正
 *       404:
 *         description: リンクが見つからない
 *       500:
 *         description: サーバー内部エラー
 */

/**
 * @swagger
 * /api/links/{id}:
 *   delete:
 *     summary: 指定したリンクを削除
 *     tags:
 *       - Links
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: 削除対象リンクのID
 *     responses:
 *       200:
 *         description: リンク削除成功
 *       404:
 *         description: リンクが見つからない
 *       500:
 *         description: サーバー内部エラー
 */