import React from "react";
import { FaGithubSquare, FaLinkedinIn, FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 align-items-center">
            <div className="d-flex justify-content-center">
              <p className="copyright"><FaCopyright /> Devyn Bailey</p>
              <a href="https://github.com/dbailey11" className="icon">
                <FaGithubSquare />
              </a>
              <a href="https://www.linkedin.com/in/devyn-bailey/" className="icon">
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
