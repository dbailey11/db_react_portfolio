import React from "react";
import Photo from "../img/aboutme.jpg";

const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
          <img className="profile-img" src={Photo} alt="Devyn Bailey Photo" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h2 className="about-heading">About Me</h2>
          <p>
            Hi all, I am Devyn Bailey. A Colorado native who believes in hard
            work and values being kind. With a passion for simplistic styling
            and an eye for detail, my goal is to help improve the lives of those
            around me. Currently I am enrolled in the University of Denver's
            full stack web developer certification course. I am very much
            looking forward to having the opportunities to join amazing teams
            and be able to help improve the world we live in. Estimated
            graduation is March 2021.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;