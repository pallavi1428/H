import React from "react";
import Doctor from "../Assets/download.jpg";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span> What Our Team and Innovations Bring</span>
        </h3>
        <p className="about-description">
        Introducing our intelligent companion, a testament to our commitment – your digital guide designed to elevate your interactions. More than just code, our bot is a friendly aide engaging in conversations, offering valuable insights, and seamlessly adapting to your needs. Whether deciphering medical reports or aiding in daily queries, the bot, alongside our team, embarks on a mission to redefine how technology serves and enhances your unique journey.
        </p>

        <h4 className="about-text-title">Our Solutions</h4>

        <SolutionStep
          title="Chat with our Health.y Bot"
          description="Input your Conncern and talk with it"
        />

        <SolutionStep
          title="Input your Medical Report"
          description="Simply upload your medical report in various format and get detailed answers and from Heathy+Bot"
        />
      </div>
    </div>
  );
}

export default About;
