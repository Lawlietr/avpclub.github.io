# AGENTS.md

## 概述
本專案是一個靜態網站專案，使用 GitHub Pages 部署。主要內容為 DNS over HTTPS (DoH) 服務的官方網站與过滤規則。

## 專案結構
```
.
├── index.html          # 主網站頁面
├── Filters/            # DNS 过滤規則目錄
│   └── hosts.txt       # 防廣告、惡意軟體過濾規則
├── iOS_conf/           # iOS 配置檔案
└── README.md           # 專案說明文件
```

## 建置與部署指令

```bash
# 本地預覽（需要 Jekyll）
bundle exec jekyll serve

# GitHub Pages 自動部署
git push origin main
```

此專案無需建置步驟，直接部署靜態檔案。

## 程式碼風格規範

### 一般規範
- 使用 2 個空格縮排
- 行尾不保留多餘空格
- 檔案結尾保留一個換行符號
- 使用 snake_case 命名檔案與目錄
- 使用 kebab-case 命名 ID 與 class

### HTML/CSS
- 使用 2 個空格縮排
- 屬性值使用雙引號
- 使用內部 CSS（`<style>` 標籤）
- 使用 `class` 而非 ID 進行樣式設定
- 媒體查詢使用 mobile-first

### JavaScript
- 使用單引號字串
- 使用 `const` 而非 `let`（除非需要重新賦值）
- 使用 `===` 而非 `==`
- 避免全局變數

### 中文化
- 所有文字內容使用繁體中文
- 變數與函數命名使用英文
- 註解使用繁體中文

### 事件處理
- 使用 `addEventListener` 而非內聯事件
- 事件處理函數使用 snake_case 命名

### Import 規範
- 本專案無外部 import
- JavaScript 程式碼直接內嵌於 HTML

### 過濾器規則
- `hosts.txt` 檔案使用 AdGuard 格式
- 開頭包含版本、過期日、首頁連結
- 使用 `!` 作為註解符號
- 白名單使用 `@@||`

## 注意事項
- 提交前確認 HTML 語法正確
- 確保 CSS 無語法錯誤
- 更新过滤規則後測試有效性
- 確保相容主流瀏覽器最新版本
- 使用 GitHub Actions 自動部署