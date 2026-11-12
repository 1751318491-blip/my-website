console.log("脚本加载成功了");
const logo = document.querySelector(".logo");
console.log(logo.textContent);

logo.textContent = "CGY · 学习中";
const intro  = document.querySelector(".intro");
intro.textContent = "欢迎来到我的个人网站，这里是我的学习笔记和项目展示。";
const tags = document.querySelectorAll(".skills span");

tags.forEach(function (tag) {
  tag.addEventListener("click", function () {
    tags.forEach(function (t) {
      t.classList.remove("active");
    });
    tag.classList.add("active");
  });
});