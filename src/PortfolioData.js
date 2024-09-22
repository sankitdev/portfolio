import yumrun from "./assets/YumRun.png";
import focustube from "./assets/FocusTube.png";
const header = {
  homepage: "", // Replace with your actual portfolio URL
  title: "Ankit Singh",
};

const about = {
  name: "Ankit Singh",
  role: ["FrontEnd Developer", "BackEnd Developer", "Full Stack Developer"],
  description:
    "I am an aspiring full-stack developer focused on MERN stack with experience in building responsive, interactive web applications. Passionate about learning new technologies and writing clean, efficient code.",
  resume: "", // Replace with your resume URL
  social: {
    linkedin: "https://linkedin.com/in/sankitdev", // Replace with your LinkedIn profile
    github: "https://github.com/sankitdev", // Replace with your GitHub profile
  },
};

const projects = [
  {
    name: "YumRun",
    description:
      "A food ordering app built with React, Redux, and Tailwind CSS. It offers a clean user interface and seamless user experience for ordering meals.",
    stack: ["React", "Redux", "Tailwind CSS"],
    image: yumrun,
    sourceCode: "https://github.com/sankitdev/YumRun", // Replace with actual repo
    livePreview: "https://yumrun.com", // Replace with live project link
  },
  {
    name: "FocusTube",
    description:
      "A YouTube clone focused on providing a clean and minimal video browsing experience. Built with React and Redux, featuring responsive design.",
    stack: ["React", "Redux", "Tailwind CSS"],
    image: focustube,
    sourceCode: "https://github.com/sankitdev/focus-tube", // Replace with actual repo
    livePreview: "https://focustube.com", // Replace with live project link
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Tailwind CSS",
  "Material UI",
  "Git",
  "CI/CD",
  "Jest",
  "Enzyme",
];

const contact = {
  email: "sankitdev@gmail.com", // Replace with your email
};

export { header, about, projects, skills, contact };
