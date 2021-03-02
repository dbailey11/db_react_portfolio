import React from "react";
import { FaGithubSquare, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Copyright Devyn Bailey</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="foot-nav">Home</a>
                <br />
                <a className="foot-nav">About Me</a>
                <br />
                <a className="foot-nav">Experience</a>
              </div>
              <div className="col">
                <a className="foot-nav">Portfolio</a>
                <br />
                <a className="foot-nav">Contact Me</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <a href="https://github.com/dbailey11">
                <FaGithubSquare />
              </a>
            </div>
            <div className="d-flex justify-content-center">
              <a href="https://www.linkedin.com/in/devyn-bailey/">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
