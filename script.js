console.log("脚本加载成功了");
const logo = document.querySelector(".logo");
console.log(logo.textContent);

logo.textContent = "CGY · 学习中";
const intro  = document.querySelector(".intro");
intro.textContent = "欢迎来到我的个人网站，这里是我的学习笔记和项目展示。";
const skillList = [
  { name: "HTML", level: 80 },
  { name: "CSS", level: 70 },
  { name: "JavaScript", level: 40 }
];

const skillsBox = document.querySelector(".skills");

skillList.forEach(function (item) {
  const span = document.createElement("span");
  span.textContent = item.name;

  span.addEventListener("click", function () {
    document.querySelectorAll(".skills span").forEach(function (t) {
      t.classList.remove("active");
    });
    span.classList.add("active");
  });

  skillsBox.appendChild(span);
});