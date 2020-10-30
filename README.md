# 切版-陶瓷電商網站
 
[DEMO](https://wanchii.github.io/gulp-bs4-w6/dist/index.html)

### 網頁使用工具
- gulp
- Bootstrap4 + SCSS
- jQuery
- icon : Material icon

#### 網站頁面:電腦版、手機板
- 首頁
- 產品頁面
- 單一產品頁面
- 結帳頁面
- 購物車

####  第二版修正

1. 透過變數去設計不同背景的文字顏色
```
在layout的子頁面上方新增變數
---
title: product
layout: ./app/layout.ejs
engine: ejs
current: index
mode: light ---->這個
---
並在layout.ejs的header上增加
<header class="header container position-relative <%- mode %>">
```
2. aside 打開時的滿版效果 

3. mobile版在購物車打開時 aside 的關閉

4. table 排版的地方改用 flex

5. order summary下拉選單的地方 使用 col-md-4 在視窗縮放時字會超出灰色區域
原先 table 排版改用 flex 排版解決問題 

6. input 對應的 label 並且使用 sr-only 這個class

7. 使用 Bootstrap 的斷點 
使用以下這兩個
```
min-width: 768px @include media-breakpoint-up(md) { ... }
max-width: 767.98px @include media-breakpoint-down(sm) { ... }
如果要再修改應該是要統一看是由大到小還是由小到大
```
