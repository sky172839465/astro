# YUSONG.DEV

這是一個基於 Astro 框架開發的個人部落格專案，旨在提供一個簡潔、高效且易於擴展的寫作平台。

## ✍️ 資深撰稿人指南

在 YUSONG.DEV，我們追求內容的清晰度與組織性。以下是撰寫文章與管理系列內容的指引。

### 如何開始寫作
文章檔案存放在 `src/content/blog/` 目錄下。
- **命名規範**：檔案名稱請使用 `kebab-case`（例如：`my-first-post.md`）。
- **圖片管理**：靜態資產（如首圖與文章內圖）請存放在 `public/blog/[slug]/` 目錄下（若有子資料夾則對應路徑，例如 `public/blog/pwa/my-post/`），並在 Markdown 中使用以 `/blog/` 開頭的絕對路徑引用。

### 文章必備資訊
每篇部落格文章開頭的元資料（Frontmatter）必須包含以下欄位：
- `title`: 文章標題
- `description`: 簡短摘要
- `pubDate`: 發布日期（格式：`MMM DD YYYY`）
- `heroImage`: 首圖路徑
- `tags`: 標籤列表（陣列形式）

### 系列文章（Series）
當你在 `src/content/blog/` 內建立子資料夾（如 `src/content/blog/pwa/`）並放入多篇文章時，系統會自動將其歸類為一個「系列」。系列頁面會自動生成於 `/blog/[系列名稱]/`，並根據發布日期排序。

---

## 🛠️ 資深開發者技術文件

本專案採用現代前端技術架構，確保開發體驗與效能表現達到頂尖水準。

### 程式碼結構
專案基於 **Astro** 框架建置，採用內容集合（Content Collections）管理資料：
- `src/components/`: 存放 Astro 與 React 元件。
- `src/layouts/`: 定義頁面佈局，包含 `BlogPost.astro` 與 `SeriesIndex.astro`。
- `src/pages/`: 透過檔案系統路徑定義路由。
- `src/content/`: 存放 Markdown 內容，由 `content.config.ts` 定義資料結構。
- `src/store/`: 使用 **Jotai** 進行全域狀態管理（如透過 `themeAtom` 與 `atomWithStorage` 實作持久化主題切換）。

### UI 技術棧
- **Tailwind CSS v4**: 利用最新一代的 CSS 框架進行開發，全面支援 OKLCH 色彩空間。
- **Radix UI**: 作為無障礙與基礎互動元件的核心，結合 `@radix-ui/react-icons` 提供一致的介面。
- **Shadcn UI**: 提供高度可自訂的精緻 UI 元件（位於 `src/components/ui/`）。
- **Lucide React**: 補充性的圖示庫。

---

## 🎨 資深設計師設計規範

我們的設計哲學強調簡約與易讀性，並利用現代 CSS 特性提升視覺品質。

### 設計模式
- **首頁 (Home)**：聚焦於個人品牌與日記（Diary）區塊。日記卡片內容來自 `src/content/home/diary.md`，並會自動顯示檔案最後更新時間。
- **關於 (About)**：展示專業背景與專長領域，強調視覺清晰度。
- **部落格與系列 (Blog & Series)**：
    - **目錄 (TOC)**：採用扁平化的數字索引（如 1. xxx），連結靠左對齊，並根據標題深度進行層級縮排。
    - **導覽元件**：系列文章提供 `Series.astro` 元件，方便使用者在系列內容中切換。
- **標籤 (Tags)**：動態生成的標籤雲與過濾頁面。
- **404 頁面**：極簡設計，引導使用者回到首頁或閱讀最新文章。

### 視覺系統
- **色彩系統**：採用 **OKLCH** 定義，確保在深色與淺色模式下都能維持良好的對比度與視覺一致性。
- **佈局設計**：主內容區域使用彈性佈局（Flexbox），確保頁尾在內容較少時仍能固定於底部。
- **互動體驗**：全域啟用 Astro View Transitions，提供流暢的頁面切換體驗。
