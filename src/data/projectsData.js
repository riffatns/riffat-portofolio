import lapangin from "../assets/lapangin.png";
import datapacific from "../assets/data-pacific.png";
import pizzamenu from "../assets/pizza-menu.png";

const projects = [
  {
    id: 1,
    title: "Lapangin",
    image: lapangin,
    technologies: ["HTML", "CSS", "Java", "Java Swing", "MySQL", "Bootstrap", "NetBeans", "GitHub"],
    description: "A sports field booking application with a Java Swing desktop interface and a web-based frontend using HTML, CSS, and Bootstrap, connected to a MySQL database for managing user data and booking schedules.",
    link: null,
    github: "https://github.com/nauffalrn/lapangin_application",
    features: [
      { text: "Field Booking System", emoji: "🏟️" },
      { text: "User Authentication & Session", emoji: "🔐" },
      { text: "MySQL Database Integration", emoji: "🗄️" },
    ],
  },
  {
    id: 2,
    title: "Data Visualization ",
    image: datapacific,
    technologies: ["React.js", "Tailwind CSS", "D3.js", "GitHub"],
    description:
      "An interactive data visualization website for PACIFIC Challenge 2025, built with React and D3.js to explore workforce distribution trends across Pacific regions by age, gender, and location.",
    link: "https://pacific-challange.vercel.app/",
    github: "https://github.com/riffatns/Pacific-Challange",
    features: [
      { text: "Data Visualization", emoji: "📊" },
      { text: "Responsive UI with Tailwind", emoji: "📱" },
     { text: "Interactive Charts & Insights", emoji: "🧠" },
    ],
  },  
  {
    id: 3,
    title: "Pizza Menu",
    image: pizzamenu,
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "GitHub"],
    description: "An online menu home page for a Pizza restaurant",
    link: "https://vasudevsoni.github.io/pizza-menu/",
    github: "https://github.com/vasudevsoni/pizza-menu",
    features: [
      { text: "Static Web App", emoji: "🧩" },
      { text: "Aesthetic UI", emoji: "😍" },
      { text: "Mobile Responsive", emoji: "📱" },
    ],
    hidden: true
  },
];

export { projects };
