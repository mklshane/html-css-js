const projects = [
  {
    image: "projects/weflash.png",
    name: "WeFlash",
    desc: "A web application for creating and generating flashcards for efficient studying.",
    tools: ["ReactJS", "MongoDB", "NodeJS", "Express", "Firebase"],
    github: "https://github.com/mklshane/WeFlash",
    live: "https://weflash-1.onrender.com/",
  },
  {
    image: "projects/dvd.png",
    name: "DVD Eliminator",
    desc: "DVD Eliminator lets users input a list of words or names and watch as they're eliminated one by one—until only one winner remains.",
    tools: ["ReactJS"],
    github: "https://github.com/mklshane/dvd-eliminator",
    live: "https://dvd-eliminator.vercel.app/",
  },
  {
    image: "projects/timer.png",
    name: "Timer Rush",
    desc: "A playful and fast-paced web app designed to test your intuition and timing skills. See how accurately you can stop the timer.",
    tools: [
      "ReactJS",
      "Typescript",
      "MongoDB",
      "NodeJS",
      "Express",
      "Tailwind",
    ],
    github: "https://github.com/mklshane/timer-rush",
    live: "https://timer-rush.onrender.com/",
  },
];

const skills = [
  { name: "JavaScript" },
  { name: "React", category: "frontend" },
  { name: "HTML", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "MongoDB", category: "database" },
  { name: "Firebase", category: "tools" },
  { name: "Git", category: "tools" },
  { name: "Tailwind", category: "frontend" },
  { name: "Java" },
  { name: "Python" },
  { name: "MySQL", category: "database" },
  { name: "VS Code", category: "tools" },
  { name: "Figma", category: "tools" },
];

let projHTML = " ";

function renderProjects() {
  projHTML = "";
  projects.forEach((project, i) => {
    projHTML += `
            <div class="col-12 col-md-4">
                <div class="card h-100">
                    <img src=${project.image} class="card-img-top" alt="...">
                    <div class="card-body d-flex flex-column justify-content-between">
                    <h5 class="card-title">${project.name}</h5>
                    <p class="card-text">${project.desc} </p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#projectModal" data-index=${i}>Read more</button>
                    </div>
                </div>
            </div>
            `;
  });
  document.querySelector(".js-container").innerHTML = projHTML;
  addCardEventListeners();
}

document.addEventListener("click", function (e) {
  if (e.target.matches("[data-bs-toggle='modal']")) {
    const index = e.target.getAttribute("data-index");
    const project = projects[index];

    // update content of the modal
    document.querySelector(".project-image").src = project.image;
    document.getElementById("projectModalLabel").textContent = project.name;
    document.querySelector(".modal-body").textContent = project.desc;
    document.querySelector(".source").href = project.github;
    document.querySelector(".link").href = project.live;

    // render tools
    let toolsHTML = " ";
    project.tools.forEach((tool, i) => {
      toolsHTML += `
        <span class="tool-style">${tool}</span>
        `;
    });

    document.querySelector(".modal-tools").innerHTML = toolsHTML;
  }
});


function addCardEventListeners() {
  /* const cards = document.querySelectorAll(".card"); */
  const container = document.querySelector(".container");
  const titles = document.querySelectorAll(".card-title");
  

  titles.forEach((title) => {
    title.addEventListener("click", function () {
      const randomColor = getRandomColor();
      container.style.backgroundColor = randomColor;
    });
  });
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let skillsHTML = "";

function renderSkills() {

  skills.forEach((skill) => {
    skillsHTML += `
            <div class="skill-item ${skill.category}">
                <span>${skill.name}</span>
            </div>
        `;
  });

  // duplicate for seamless loop
  skills.forEach((skill) => {
    skillsHTML += `
            <div class="skill-item ${skill.category}">
                <span>${skill.name}</span>
            </div>
        `;
  });

  document.getElementById("skillsTrack").innerHTML = skillsHTML;
}


const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  const email = document.getElementById('email').value;
  if(!email.includes("@")){
    alert("Please enter a valid email address.");
    event.preventDefault();
  }
  const name = document.getElementById('name').value;
  if (!name) {
    alert("Please enter a name.");
    event.preventDefault();
  }
});

// render skills & projects
renderSkills();
renderProjects();
