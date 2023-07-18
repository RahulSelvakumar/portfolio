import React from 'react'
import "../styles/Header.css"
import github from "../images/github-icon.png"
import linkedin from "../images/linkedin-icon.png"
import instagram from "../images/instagram-icon.png"

const Header = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
       <div className="header-left">
        <a href="https://github.com/RahulSelvakumar" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/rahulselvakumar/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram" />
        </a>
      </div>
      <div className="header-right">
        <button onClick={() => handleScroll('home')}>Home</button>
        <button onClick={() => handleScroll('project')}>Projects</button>
        <button onClick={() => handleScroll('contact')}>Contact</button>
      </div>
     
    </header>
  );
}

export default Header;
