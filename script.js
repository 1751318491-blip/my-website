console.log("脚本加载成功了");

const logo = document.querySelector(".logo");
logo.textContent = "CGY · 学习中";

const intro = document.querySelector(".intro");
intro.textContent = "欢迎来到我的个人网站，这里是我的学习笔记和项目展示。";

const defaultSkills = [
  { name: "HTML", level: 80 },
  { name: "CSS", level: 70 },
  { name: "JavaScript", level: 40 }
];

const saved = localStorage.getItem("skills");
const skillList = saved ? JSON.parse(saved) : defaultSkills;

const skillsBox = document.querySelector(".skills");

  skillList.forEach(function (item, index) {
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

    const del = document.createElement("button");
    del.textContent = "×";
    del.className = "del";
    del.addEventListener("click", function (event) {
      event.stopPropagation();
      skillList.splice(index, 1);
      saveSkills();
      renderSkills();
    });
    span.appendChild(del);

    span.addEventListener("click", function () {
      document.querySelectorAll(".skills span").forEach(function (t) {
        t.classList.remove("active");
      });
      span.classList.add("active");
    });

    skillsBox.appendChild(span);
  });

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

function saveSkills() {
  localStorage.setItem("skills", JSON.stringify(skillList));
}

const input = document.querySelector("#skillInput");
const addBtn = document.querySelector("#addBtn");

addBtn.addEventListener("click", function () {
  const name = input.value.trim();

  if (name === "") {
    return;
  }

  const exists = skillList.some(function (item) {
    return item.name.toLowerCase() === name.toLowerCase();
  });

  if (exists) {
    alert("「" + name + "」已经添加过了");
    return;
  }

  skillList.push({ name: name, level: 0 });
  saveSkills();
  input.value = "";
  renderSkills();
});
