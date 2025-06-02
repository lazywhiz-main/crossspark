# CROSS SPARK - 異業種化学反応メディアサイト

異なる業種の人々が集まり、一つの話題について意見を交わすことで新しい発見を得るメディアサイトです。

## 特徴

- ブルータリズムデザインによる視覚的なインパクト
- 業種ごとの色分けによる視覚的な区別
- レスポンシブデザインによるモバイル対応
- インタラクティブな要素（フィルター、アコーディオン、フォーム）

## 技術スタック

- HTML5
- CSS3 (カスタムプロパティ、Flexbox, Grid)
- JavaScript (ES6+)
- Work Sans (Google Fonts)

## セットアップ手順

1. リポジトリのクローン
```bash
git clone [repository-url]
cd crossspark
```

2. 依存関係のインストール
```bash
npm install
```

3. 開発サーバーの起動
```bash
npm start
```

4. ブラウザで確認
```
http://localhost:8080
```

## プロジェクト構造

```
crossspark/
├── src/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
├── package.json
└── README.md
```

## ページ構成

1. HOME
   - ヒーローセクション
   - 最新バグレポート一覧
   - 統計情報
   - 参加方法の説明

2. BUG REPORTS
   - カテゴリーフィルター
   - 業種フィルター
   - 検索機能
   - ページネーション

3. SUBMIT
   - 新しい話題提案
   - 既存話題への参加
   - 業種選択
   - 投稿フォーム

4. ABOUT
   - ミッション説明
   - プロセス説明
   - FAQ
   - 統計情報

## 業種カラーシステム

- エンジニア: #00aaff (青)
- デザイナー: #ff3366 (ピンク)
- 料理人: #00ff88 (緑)
- 教師: #ff8800 (オレンジ)
- マーケター: #aa00ff (紫)
- 医師: #ff6600 (濃いオレンジ)
- アーティスト: #9944ff (紫系)
- その他: #666666 (グレー)

## 開発者向け情報

### ビルド

CSSのビルド:
```bash
npm run build
```

### ブランチ戦略

- `main`: 本番環境用
- `develop`: 開発用
- `feature/*`: 機能開発用

### コーディング規約

- CSS: BEM命名規則
- JavaScript: ESLint + Prettier
- コミットメッセージ: Conventional Commits

## ライセンス

MIT License 