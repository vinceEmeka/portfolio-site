// FLOATING NAVS ========================
const floatingNavs = document.querySelectorAll(".floating_nav a");

const removeActiveClass = () => {
  floatingNavs.forEach((nav) => {
    nav.classList.remove("active")
  })
}
floatingNavs.forEach((nav) => {
  nav.addEventListener("click", () => {
    removeActiveClass();
    nav.classList.add('active');
  })
})

// RESUME =================

const resumeRight = document.querySelector(".resume_right");
const experienceContent = ` <h4>Experience</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas facere
            animi assumenda minima consequatur sint!
          </p>
          <ul>
            <li>
              <h6>2018 - 2019</h6>
              <h5>Intern</h5>
              <p>Mobile telecom company</p>
            </li>
            <li>
              <h6>2019 - 2021</h6>
              <h5>Freelance Web Designer</h5>
              <p>Fiverr</p>
            </li>
            <li>
              <h6>2021 - 2022</h6>
              <h5>Frontend Developer</h5>
              <p>Mobile telecom company</p>
            </li>
            <li>
              <h6>2022 - 2024</h6>
              <h5>Web Developer</h5>
              <p>Mobile telecom company</p>
            </li>
          </ul>`

const experienceBtn = document.querySelector(".experience_btn");
experienceBtn.addEventListener("click", () => {
  resumeRight.innerHTML = experienceContent;
  resumeRight.className = "resume_right";
  experienceBtn.classList.add('primary');
  //remove classes from other button
  aboutBtn.classList.remove('primary');
  skillsBtn.classList.remove('primary');
  educationBtn.classList.remove('primary');

})
//set experienceContent as default content for resume right when page loads
resumeRight.innerHTML = experienceContent;


//EDUCATION==

const educationBtn = document.querySelector(".education_btn");
const educationContent = `
<h4>Education</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            similique reiciendis quas ipsa amet ratione?
          </p>

          <ul>
            <li>
              <h5>College Education</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                temporibus assumenda alias nobis facilis laborum ratione beatae
                possimus aspernatur commodi.
              </p>
            </li>
            <li>
              <h5>Cohort</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                temporibus assumenda alias nobis facilis laborum ratione beatae
                possimus aspernatur commodi.
              </p>
            </li>
            <li>
              <h5>freeCodeCamp Education</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                temporibus assumenda alias nobis facilis laborum ratione beatae
                possimus aspernatur commodi.
              </p>
            </li>
          </ul>
        </div>
`
educationBtn.addEventListener("click", () => {
  resumeRight.innerHTML = educationContent;
  resumeRight.className = "resume_right education";
  educationBtn.classList.add('primary');
  //remove classes from other button
  aboutBtn.classList.remove('primary');
  skillsBtn.classList.remove('primary');
  experienceBtn.classList.remove('primary');
});

// SKILLS  ====

const skillscontent = `     <h4>Skills</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      <ul>
        <li><img src="./responsive-portfolio-starter-main/assets/react.webp" alt="ReactJS logo"></li>
        <li><img src="./responsive-portfolio-starter-main/assets/next.png" alt="NextJS logo"></li>
        <li><img src="./responsive-portfolio-starter-main/assets/tailwind.png" alt=""></li>
        <li><img src="./responsive-portfolio-starter-main/assets/prisma.png" alt=""></li>
        <li><img src="./responsive-portfolio-starter-main/assets/mongo.jpg" alt=""></li>
        <li><img src="./responsive-portfolio-starter-main/assets/jwt.png" alt=""></li>
        <li><img src="./responsive-portfolio-starter-main/assets/node.png" alt=""></li>

      </ul>`

const skillsBtn = document.querySelector(".skills_btn");
skillsBtn.addEventListener("click", () => {
  resumeRight.innerHTML = skillscontent;
  resumeRight.className = "resume_right skills";

  skillsBtn.classList.add("primary");
  //remove classes from other button
  aboutBtn.classList.remove('primary');
  educationBtn.classList.remove('primary');
  experienceBtn.classList.remove('primary');

});

// About me =====

const aboutContent = `<h4>About me</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, blanditiis officiis. Unde molestias aspernatur porro.</p>
        <ul>
          <li>
            <h6>Name:</h6>
            <h5>Chimezie Vincent</h5>
          </li>
          <li>
            <h6>Experience:</h6>
            <h5>2+ years</h5>
          </li>
          <li>
            <h6>Email:</h6>
            <h5>chimezievinz@gmail.com</h5>
          </li>
          <li>
            <h6>Nationality:</h6>
            <h5>Nigeria</h5>
          </li>
          <li>
            <h6>Freelance & Collabs:</h6>
            <h5>Available</h5>
          </li>
          <li>
            <h6>Language:</h6>
            <h5>English</h5>
          </li>
          <li>
           
        </ul>
        `

const aboutBtn = document.querySelector(".about_btn");
aboutBtn.addEventListener("click", () => {
  resumeRight.innerHTML = aboutContent;
  resumeRight.className = "resume_right about";
  aboutBtn.classList.add("primary");
  //remove classes from other button
  skillsBtn.classList.remove('primary');
  educationBtn.classList.remove('primary');
  experienceBtn.classList.remove('primary');

});


// MIXITUP PROJECTS SECTION =============================

const containerEl = document.querySelector(".projects_container");

let mixer = mixitup(containerEl, {
  animation: {
    enable: false
  }

})

mixer.filter('*')
mixer = mixitup(".mixit_active")


// ========================= Theme

const themeToggler = document.querySelector(".nav_theme-btn");


themeToggler.addEventListener("click", () => {

  document.body.classList.toggle(".dark-theme-variables")
  if (document.body.className == "") {
    themeToggler.innerHTML = `<i class="fa-regular fa-moon"></i>`
    window.localStorage.setItem("portfolio-theme", "")
  } else {
    themeToggler.innerHTML = ` <i class="fa-regular fa-sun"></i>`
    window.localStorage.setItem("portfolio-theme", "dark-theme-variables")
  }
});


// use saved theme from local storage

const bodyClass = window.localStorage.getItem("portfolio-theme");
document.body.className = bodyClass;