# 🔥 星城长沙 (Changsha Travel) - 城市旅游宣传页

> 这是一个基于 HTML5 + CSS3 开发的城市旅游宣传单页应用。
> 项目以“网红城市”长沙为主题，通过经典的浮动布局与响应式设计，展示了城市风光、景点介绍及在线预约功能。

## 🌟 项目亮点
- **经典布局实践**：回归使用 **CSS Float (浮动)** 进行页面排版，深入理解清除浮动 (`clearfix`) 原理。
- **复杂图文混排**：
  - “关于星城”板块实现左右两栏图文布局。
  - “网红打卡”板块实现三栏并列的卡片式布局。
- **响应式适配**：
  - 使用 `@media` 媒体查询适配移动端设备。
  - 在小屏幕下自动取消浮动，将多栏布局平滑转换为单栏堆叠显示。
- **交互功能**：
  - 顶部导航栏吸顶效果 (`position: sticky`)。
  - 底部表单拦截默认提交行为，使用 JavaScript 模拟“预约成功”反馈。

## 🛠️ 技术栈
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![Layout](https://img.shields.io/badge/Layout-Float-orange?style=flat-square)

## 📂 文件结构
```text
page2_travel/
├── index.html      # 首页结构
├── style.css       # 样式表 (核心包含 .clearfix 与 @media 适配)
├── script.js       # 表单验证与交互逻辑
└── images/         # 景点与美食图片素材