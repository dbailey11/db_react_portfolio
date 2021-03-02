import React from "react";
import Cats from "../img/mighty-sea-42900.herokuapp.com_.png";
import Pokemon from "../img/screenshot.png";
import Team from "../img/screenshot.JPG";
import Dogs from "../img/breeds_quiz_hw4_start.png";
import EmpTrack from "../img/emp_track_screenshot.JPG";
import Weather from "../img/weather_dashboard_screenshot.png";
//FONT AWESOME IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
//REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import 'react-popupbox/dist/react-popupbox.css';

const Projects = () => {
  //Cats
  const openPopupboxCats = () => {
    const content = (
        <>
        <img className="project-image-popupbox" src={Cats} alt="Cat Marketplace App" />
        <p>Magna ut consequat sint aliqua eiusmod elit id irure nulla enim.Fugiat eiusmod adipisicing esse Lorem excepteur mollit ullamco do. Eu minim dolor ut laborum. Et consequat tempor consequat laborum culpa amet.</p>
        <a className="hyper-link" onClick={() => window.open("https://mighty-sea-42900.herokuapp.com/")}>Demo</a>
        <br/>
        <a className="hyper-link" onClick={() => window.open("https://github.com/CodyOps/Project-2")}>GitHub</a>
        
        </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigCats = {
      titleBar: {
          enable: true,
          text: "Cats Marketplace"
      },
      fadeIn: true,
      fadeInSpeed: 500
  }

  //Pokemon
  const openPopupboxPokemon = () => {
    const content = (
        <>
        <img className="project-image-popupbox" src={Pokemon} alt="Pokemon App" />
        <p>Magna ut consequat sint aliqua eiusmod elit id irure nulla enim.Fugiat eiusmod adipisicing esse Lorem excepteur mollit ullamco do. Eu minim dolor ut laborum. Et consequat tempor consequat laborum culpa amet.</p>
        <a className="hyper-link" onClick={() => window.open("https://gsteed1677.github.io/furry-bassoon/")}>Demo</a>
        <br/>
        <a className="hyper-link" onClick={() => window.open("https://github.com/gsteed1677/furry-bassoon")}>GitHub</a>
        
        </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigPokemon = {
      titleBar: {
          enable: true,
          text: "Pokemon App"
      },
      fadeIn: true,
      fadeInSpeed: 500
  }

  //Team Summary
  const openPopupboxTeam = () => {
    const content = (
        <>
        <img className="project-image-popupbox" src={Team} alt="Team Summary App" />
        <p>Magna ut consequat sint aliqua eiusmod elit id irure nulla enim.Fugiat eiusmod adipisicing esse Lorem excepteur mollit ullamco do. Eu minim dolor ut laborum. Et consequat tempor consequat laborum culpa amet.</p>
        <a className="hyper-link" onClick={() => window.open("https://github.com/dbailey11/team_summary")}>GitHub</a>
        
        </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigTeam = {
      titleBar: {
          enable: true,
          text: "Team Summary App"
      },
      fadeIn: true,
      fadeInSpeed: 500
  }

  //Breed Quiz
  const openPopupboxDogs = () => {
    const content = (
        <>
        <img className="project-image-popupbox" src={Dogs} alt="Breed Quiz App" />
        <p>Magna ut consequat sint aliqua eiusmod elit id irure nulla enim.Fugiat eiusmod adipisicing esse Lorem excepteur mollit ullamco do. Eu minim dolor ut laborum. Et consequat tempor consequat laborum culpa amet.</p>
        <a className="hyper-link" onClick={() => window.open("https://dbailey11.github.io/breeds_quiz_hw4/")}>Demo</a>
        <br/>
        <a className="hyper-link" onClick={() => window.open("https://github.com/dbailey11/breeds_quiz_hw4")}>GitHub</a>
        
        </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigDogs = {
      titleBar: {
          enable: true,
          text: "Breed Quiz App"
      },
      fadeIn: true,
      fadeInSpeed: 500
  }

  //Employee Tracker
  const openPopupboxEmpTrack = () => {
    const content = (
        <>
        <img className="project-image-popupbox" src={EmpTrack} alt="Employee Tracker App" />
        <p>Magna ut consequat sint aliqua eiusmod elit id irure nulla enim.Fugiat eiusmod adipisicing esse Lorem excepteur mollit ullamco do. Eu minim dolor ut laborum. Et consequat tempor consequat laborum culpa amet.</p>
        <a className="hyper-link" onClick={() => window.open("https://github.com/dbailey11/employee_tracker")}>GitHub</a>
        
        </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigEmpTrack = {
      titleBar: {
          enable: true,
          text: "Employee Tracker App"
      },
      fadeIn: true,
      fadeInSpeed: 500
  }

  //Weather dashboard
  const openPopupboxWeather = () => {
    const content = (
        <>
        <img className="project-image-popupbox" src={Weather} alt="Weather Dashboard App" />
        <p>Magna ut consequat sint aliqua eiusmod elit id irure nulla enim.Fugiat eiusmod adipisicing esse Lorem excepteur mollit ullamco do. Eu minim dolor ut laborum. Et consequat tempor consequat laborum culpa amet.</p>
        <a className="hyper-link" onClick={() => window.open("https://dbailey11.github.io/weather_dashboard/")}>Demo</a>
        <br/>
        <a className="hyper-link" onClick={() => window.open("https://github.com/dbailey11/weather_dashboard")}>GitHub</a>
        
        </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigWeather = {
      titleBar: {
          enable: true,
          text: "Weather Dashboard App"
      },
      fadeIn: true,
      fadeInSpeed: 500
  }

  return (
    <div id="portfolio" className="project-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="project-image-box" onClick={openPopupboxCats}>
            <img
              className="project-image"
              src={Cats}
              alt="Cat Marketplace App"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
          </div>

          {/* - */}

          <div className="project-image-box" onClick={openPopupboxPokemon}>
            <img className="project-image" src={Pokemon} alt="Pokemon App" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
          </div>

          {/* - */}

          <div className="project-image-box" onClick={openPopupboxTeam}>
            <img
              className="project-image"
              src={Team}
              alt="Employee Summary App"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
          </div>

          {/* - */}

          <div className="project-image-box" onClick={openPopupboxDogs}>
            <img className="project-image" src={Dogs} alt="Breed Quiz App" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
          </div>

          {/* - */}

          <div className="project-image-box" onClick={openPopupboxEmpTrack}>
            <img
              className="project-image"
              src={EmpTrack}
              alt="Employee Tracker CLI App"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
          </div>

          {/* - */}

          <div className="project-image-box" onClick={openPopupboxWeather}>
            <img
              className="project-image"
              src={Weather}
              alt="Weather Dashboard App"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigCats} />
      <PopupboxContainer {...popupboxConfigPokemon} />
      <PopupboxContainer {...popupboxConfigTeam} />
      <PopupboxContainer {...popupboxConfigDogs} />
      <PopupboxContainer {...popupboxConfigEmpTrack} />
      <PopupboxContainer {...popupboxConfigWeather} />
    </div>
  );
};

export default Projects;
