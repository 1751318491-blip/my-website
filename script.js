console.log("脚本加载成功了");

const logo = document.querySelector(".logo");
logo.textContent = "CGY · 学习中";

const intro = document.querySelector(".intro");
intro.textContent = "欢迎来到我的个人网站，这里是我的学习笔记和项目展示。";

const skillList = [
  { name: "HTML", level: 80 },
  { name: "CSS", level: 70 },
  { name: "JavaScript", level: 40 }
];

const skillsBox = document.querySelector(".skills");

function renderSkills() {
  skillsBox.innerHTML = "";

  skillList.forEach(function (item) {
    const span = document.createElement("span");

    let label = "";
    if (item.level >= 70) {
      label = "熟练";
    } else if (item.level >= 40) {
      label = "学习中";
    } else {
      label = "入门";
    }

    span.textContent = item.name + " · " + label;

    span.addEventListener("click", function () {
      document.querySelectorAll(".skills span").forEach(function (t) {
        t.classList.remove("active");
      });
      span.classList.add("active");
    });

    skillsBox.appendChild(span);
  });
}

renderSkills();

const input = document.querySelector("#skillInput");
const addBtn = document.querySelector("#addBtn");

addBtn.addEventListener("click", function () {
  const name = input.value.trim();

  if (name === "") {
    return;
  }

  skillList.push({ name: name, level: 0 });
  input.value = "";
  renderSkills();
});
