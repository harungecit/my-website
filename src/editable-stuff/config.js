// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Harun",
  middleName: "",
  lastName: "Geçit",
  message: " Fullstack PHP Developer & System Admin",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/harungecit",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/gecitharun",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/gecitharun",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/harungecit",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/gecitharun",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/harungecit.jfif"),
  imageSize: 375,
  message:
    "I started my software development adventure with the PHP language, which was my first eye pain. During these processes, I learned the hosting structure, domain and DNS logic. I took part in some student projects throughout my university life. During my university education, I wanted to improve myself by taking freelancer jobs. I mainly use PHP as the software language in the companies I work for. Along with PHP, I am trying to use current frameworks (Symfony, Laravel etc.). I also know C# .Net and JavaScript languages. I'm using JavaScript with the ES6 standard. In order to improve myself, I added Nginx, Docker, Amazon Web Services (AWS) to the technologies that I add to myself. Along with all this, I learned Unix systems, bash, terminal (console), SSH. On the server side, my most preferred operating system is Ubuntu. In some cases, I prefer CentOS or a different up-to-date version, AlmaLinux. I learned network technologies and security layers such as virtual network, firewall, proxy. I continue to add value to myself.",
  resume: "https://drive.google.com/file/d/1Uo1X1JavDjPJuVXMD9AP1w2wtOjmsZx9/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "harungecit", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/harungecit.jfif"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/harungecit.jfif"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: false,
  heading: "Skills",
  hardSkills: [
    { name: "PHP", value: 80 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "Linux", value: 65 },
    { name: "JavaScript", value: 70 },
    { name: "React", value: 50 },
    { name: "HTML/CSS", value: 65 },
    { name: "C#", value: 50 },
  ],
  softSkills: [
    { name: "Click-up", value: 80 },
    { name: "Trello", value: 70 },
    { name: "Asana", value: 60 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 80 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "It all starts with saying \"Hello.\" You can send me an email.",
  email: "harungecit@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
