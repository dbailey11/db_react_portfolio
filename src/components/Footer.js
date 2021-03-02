import React from "react";
import { FaGithubSquare, FaLinkedinIn, FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 align-items-center">
            <div className="d-flex justify-content-center">
              <p className="copyright"><FaCopyright size={30}/> Devyn Bailey</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
