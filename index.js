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

// ACTIVE CLASS FOR THE NAVBARR

// window.addEventListener('scroll', function () {

//   const sections = document.querySelectorAll('section');



//   for (let section of sections) {

//     const rect = section.getBoundingClientRect();

//     if (rect.top >= 0 && rect.bottom <= window.innerHeight) {

//       // Section is visible, add active class

//       section.classList.add('active');

//     } else {

//       // Section is not visible, remove active class

//       section.classList.remove('active');

//     }

//   }

// });


document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  let currentSection = null;

  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    if (top >= 0 && top < window.innerHeight * 0.5) {
      currentSection = section;
    }
  });

  // Remove active class from all links
  navLinks.forEach((link) => link.classList.remove("active"));

  // If at the top of the page, activate the Home link
  if (window.scrollY === 0) {
    document.querySelector(`.nav-link[href="#"]`).classList.add("active");
  } else if (currentSection) {
    document
      .querySelector(`.nav-link[href="#${currentSection.id}"]`)
      .classList.add("active");
  }
});





// RESUME =================

const resumeRight = document.querySelector(".resume_right");
const experienceContent = ` <h4>Experience</h4>
          <p>
            I craft user-friendly interfaces and continuously enhance my skills through learning and problem-solving. I’m driven to create innovative solutions that make the web more engaging and accessible.
          </p>
          <ul>
            <li>
              <h6>2024 - Present</h6>
              <h5>Intern</h5>
              <p>Genesys Tech Hub</p>
            </li>
            <li>
              <h6>2023 - 2024</h6>
              <h5>Freelance Frontend Developer</h5>
              <p>Fiverr</p>
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
            My commitment to continuous learning drives me to explore new technologies and enhance my problem-solving abilities through data structures and algorithms.
          </p>

          <ul>
            <li>
              <h5>freeCodeCamp JavaScript Algorithms and Data Structures (Beta)</h5>
              <p>
               I gained practical experience with JavaScript fundamentals, algorithms, and data structures through this course with approximately 300 hours of work. This deepened my problem-solving skills and strengthened my coding expertise.
              </p>
            </li>
            <li>
              <h5>Genesys Upskill Front-end Development Course</h5>
              <p>
                I recently honed my skills through this course, where I worked on projects that reinforced my knowledge of web development fundamentals and modern tools.
              </p>
            </li>
            <li>
              <h5>freeCodeCamp Responsive Web Design</h5>
              <p>
                I gained a solid foundation in building mobile-first, responsive websites.By completing various projects, I refined my skills in structuring web pages that offer an optimal experience for all users.
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
          <p>I'm skilled in using a range of languages and tools to bring your ideas to life, but I'm always excited to learn and explore new technologies. Staying up-to-date with the latest industry trends is a priority for me, ensuring that I can deliver cutting-edge solutions tailored to your needs</p>
      <ul>
      <li><img src="./responsive-portfolio-starter-main/assets/image-3.png" alt=""></li>
      <li><img src="./responsive-portfolio-starter-main/assets/images-css.png" alt=""></li>
      <li><img src="./responsive-portfolio-starter-main/assets/bootstrap-logos" alt="bootstrap logo"></li>
      <li><img src="./responsive-portfolio-starter-main/assets/JavaScript-logo.png" alt=""></li>
        <li><img src="./responsive-portfolio-starter-main/assets/react.webp" alt="ReactJS logo"></li>
       <li><img src="./responsive-portfolio-starter-main/assets/5968381.png" alt=""></li>
        <li><img src="./responsive-portfolio-starter-main/assets/tailwind.png" alt=""></li>
         <li><img src="./responsive-portfolio-starter-main/assets/three-js.png" alt="" width="100%"></li>
         <li><img src="./responsive-portfolio-starter-main/assets/git.png" alt=""></li>
          <li><img src="./responsive-portfolio-starter-main/assets/github.webp" alt=""></li>
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
        <p>My journey in web development began with a fascination for how technology shapes the world, and I've honed my skills in JavaScript, React, and modern front-end frameworks to bring ideas to life. 
        Whether it's turning complex requirements into user-friendly designs or optimizing performance, I'm driven by the goal of making web experiences that not only look great but also work flawlessly.
        If you're looking for a dedicated developer who's committed to innovation and collaboration, I'd love to connect. Let's build something amazing together!</p>
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
            <h5><a style="color:#1abc9c;" href="mailto:chimezievinz@gmail.com">chimezievinz@gmail.com</a></h5>
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


// ========================= Theme=================
let darkmode = localStorage.getItem('darkmode');

const themeSwitch = document.getElementById("theme-switch");

const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkmode', null)
}
themeSwitch.addEventListener('click', () => {
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})


// const themeToggler = document.querySelector('.nav_theme-btn');
// themeToggler.addEventListener('click', () => {
//   document.body.classList.toggle('dark-theme-variables')
//   if (document.body.classList === '') {
//     themeToggler.innerHTML = `<i class="fa-regular fa-moon"></i>`
//   } else {
//     themeToggler.innerHTML = `<i class="fa-regular fa-sun"></i>`
//   }
// });


// const themeToggler = document.querySelector('.nav_theme-btn');

// // Add an event listener for the button
// themeToggler.addEventListener('click', () => {
//   // Toggle the dark theme class on the body
//   document.body.classList.toggle('dark-theme-variables');

//   // Check if the dark theme is currently applied
//   if (document.body.classList.contains('dark-theme-variables')) {
//     themeToggler.innerHTML = `<i class="fa-regular fa-sun"></i>`;
//   } else {
//     themeToggler.innerHTML = `<i class="fa-regular fa-moon"></i>`;
//   }
// });

const themeToggler = document.querySelector('.nav_theme-btn');

// Check if the button exists
if (themeToggler) {
  themeToggler.addEventListener('click', () => {
    // Toggle the dark theme class on the body
    document.body.classList.toggle('dark-theme-variables');

    // Update the icon based on the current theme
    if (document.body.classList.contains('dark-theme-variables')) {
      themeToggler.innerHTML = `<i class="fa-regular fa-sun"></i>`;
    } else {
      themeToggler.innerHTML = `<i class="fa-regular fa-moon"></i>`;
    }
  });
} else {
  console.log('Theme toggler button not found!');
}







//SCROLL FEATURE!



// Select all sections and navigation links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".floating_nav > a");

// Function to handle adding/removing the 'active' class
function activateMenuItem() {
  let currentSection = "";

  // Loop through sections to find which one is currently in the viewport
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    // Check if the current scroll position is within the section's bounds
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });

  // Update the active class on navigation links
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active");
    }
  });
}

// Listen for the scroll event
window.addEventListener("scroll", activateMenuItem);
