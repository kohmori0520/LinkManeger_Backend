# 📚 Link Manager API

このプロジェクトは、簡単なリンク集を管理できるAPIサーバーです。Node.js（Express）とMySQLを使用し、Dockerで簡単に環境構築ができます。

---

## 🚀 使用技術

- **Node.js**（Express + ESModules構成）
- **MySQL 8.0**
- **Docker / Docker Compose**
- **環境変数管理**：.envファイル利用

---

## 🛠️ セットアップ手順

1. **リポジトリをクローン**
    ```bash
    git clone (リポジトリURL)
    cd link-manager
    ```

2. **Dockerで環境構築＆起動**
    ```bash
    docker compose up -d --build
    ```

3. **ディレクトリ構成**
    ```
    link-manager/
    ├── docker-compose.yml
    ├── server/
    │   ├── Dockerfile
    │   ├── package.json
    │   ├── .env
    │   └── src/
    │       ├── app.js
    │       ├── config/
    │       │   └── db.js
    │       ├── controllers/
    │       │   └── linkController.js
    │       ├── models/
    │       │   └── linkModel.js
    │       └── routes/
    │           └── linkRoutes.js
    └── db/
        ├── init/
        │   └── schema.sql
        └── .env
    ```

---

## 📖 API仕様
http://localhost:3000/api-docs


---

## 💡 補足

- サーバーが正しく起動しているか確認するには、`GET /api/health` にアクセスしてください。
- MySQLの初期スキーマは `db/init/schema.sql` で定義されています。
- 環境変数は `server/.env` および `db/.env` で設定してください。
