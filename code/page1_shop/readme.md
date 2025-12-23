# 🛒 解忧杂货铺 (Grocery Store) - 电商首页 demo

> 这是一个基于 HTML5 + CSS3 开发的响应式电商网站首页。
> 项目旨在模拟一个“治愈系”数码与生活好物的在线购物体验，实现了完整的商品展示与交互流程。

## 🌟 项目亮点
- **响应式排版**：使用 **CSS Grid** 实现商品列表在 PC (4列)、平板 (2列)、手机 (1列) 之间的自动切换。
- **现代化布局**：顶部导航采用 **Flexbox** 弹性布局，底部页脚使用 **Sticky Footer** 方案，确保内容较少时页脚依然沉底。
- **交互细节**：
  - 纯 CSS 实现的 Hover 上浮与阴影加深特效。
  - JavaScript 模拟购物车“结算”功能的交互反馈。
- **语义化标签**：完全遵循 HTML5 语义化标准 (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)。

## 🛠️ 技术栈
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

## 📂 文件结构
```text
page1_shop/
├── index.html      # 首页入口
├── detail.html     # 商品详情页 (Flex布局图文混排)
├── cart.html       # 购物车页 (模拟弹窗交互)
├── style.css       # 核心样式表 (包含 Reset 与 Grid/Flex 布局)
├── script.js       # 简单的交互逻辑
└── images/         # 项目资源图片