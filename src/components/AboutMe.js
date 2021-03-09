import React from "react";
import Photo from "../img/db_headshot.jpg";
import Resume from "../docs/Devyn_Bailey_Resume_2021_plain.pdf"
import { FaGithubSquare, FaLinkedinIn } from "react-icons/fa";
import { BsFileText } from "react-icons/bs";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={Photo} alt="Devyn Bailey Photo" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h2 className="about-heading">About Me</h2>
          <p>
          Hi all, I am Devyn Bailey. I am a full stack web developer with a certification from the University of Denver. I also hold a Bachelor’s of Science degree in Biology. During my time in college I held 1-2 jobs to pay my way through, building over 10+ years of customer service experience. While attending the bootcamp I also held a full time job on top of being a parent. Being able to stay organized, multitask and roll with the flow are some of my top abilities. I am a firm believer in being a team player and collaboration, with a strong knack for interpersonal relationships. Currently I am looking to join an amazing company and team where I can not only be an asset to the company but also further expand my information technology skills.
          </p>
          <a href="https://github.com/dbailey11" target="_blank" className="icon">
            <FaGithubSquare size={40} />
          </a>
          <a href="https://www.linkedin.com/in/devyn-bailey/" target="_blank" className="icon">
            <FaLinkedinIn size={40} />
          </a>
          <a href={Resume} target="_blank" className="icon">
            <BsFileText size={40} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
