import React from 'react';
import "../styles/Home.css"
import profile from "../images/profile.jpeg";
const Home = () => {
  return (
    <section className="home-section" >
      <div className="home-content" id="home">
        <div className="profile-pic">
        <img src={profile} alt="profile"/>
        </div>
        <p>Rahul Selvakumar</p>
        <h1 className="about-me">Full stack MERN Developer</h1>
      </div>
    </section>
  );
}

export default Home;