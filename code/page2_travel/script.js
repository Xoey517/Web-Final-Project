// script.js
function submitForm(event) {
    event.preventDefault(); // 阻止页面刷新
    
    // 弹窗提示，包含长沙特色
    alert("预约成功！\n\n欢迎来到星城长沙！\n我们的旅游顾问将在 24 小时内联系您。");
    
    // 清空表单
    event.target.reset();
}

function showAlert() {
    alert("🔥 热门美食推荐：\n\n1. 茶颜悦色 (幽兰拿铁)\n2. 黑色经典臭豆腐\n3. 费大厨辣椒炒肉\n\n更多攻略正在加载中...");
}

console.log("长沙旅游宣传页 - 资源加载完毕");