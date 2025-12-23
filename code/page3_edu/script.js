// script.js
function enroll(courseName) {
    // 模拟报名交互：弹出确认框
    const confirmEnroll = confirm(`您确定要报名课程：\n《${courseName}》 吗？`);
    
    if (confirmEnroll) {
        alert("🎉 报名成功！\n\n请点击“学员登录”查看您的课程进度。");
    }
}

function login() {
    alert("这是演示页面，学员系统暂未开放。");
}

function scrollToCourses() {
    // 平滑滚动到课程区域
    document.getElementById('course-section').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

console.log("智学云课堂 - 页面加载完毕");