import { Mail, Linkedin, Github, FileDown } from "lucide-react";

function Header() {
  return (
    <header className="header">
      <div className="headerContent">
        <h1 className="title">
          Hi, I'm <span className="title-name">Riffat Nabil Shiddiq</span>
        </h1>
        <p className="subtitle">(Full Stack Developer)</p>
        <p className="about-me">
          I am an Informatics student at Telkom University with a strong passion 
          for Fullstack Development. My experience working on collaborative projects 
          has sharpened my coding abilities and strengthened my problem-solving 
          mindset. I thrive when faced with complex technical challenges and am 
          committed to continuous learning. I actively explore new technologies, 
          frameworks, and best practices to build scalable, efficient, 
          and maintainable software solutions that deliver real-world impact.
        </p>
        <div className="contactLinks">
          <a
            data-tooltip="Email"
            data-flow="bottom"
            href="mailto:riffatns1337@gmail.com"
            className="iconLink"
          >
            <Mail size={24} />
          </a>
          <a
            data-tooltip="LinkedIn"
            data-flow="bottom"
            href="https://www.linkedin.com/in/riffatns/"
            target="_blank"
            rel="noopener noreferrer"
            className="iconLink"
          >
            <Linkedin size={24} />
          </a>          
          <a
            data-tooltip="GitHub"
            data-flow="bottom"
            href="https://github.com/riffatns"
            target="_blank"
            rel="noopener noreferrer"
            className="iconLink"
          >
            <Github size={24} />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cvButton"
            download
          >
            <FileDown size={20} />
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
