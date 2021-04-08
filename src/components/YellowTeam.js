import React from "react";
import clockIcon from "../Assets/clockIcon.png";
import locationIcon from "../Assets/locationIcon.png";
import domMladih from "../Assets/domMladih.png";
import Layout from "./Layout";
import "../style.css";

const YellowTeam = () => {
  return (
    <div className="black-background">
      <Layout />
      <div className="time-and-place-container">
        <div className="first-container">
          <img src={clockIcon} alt="clock icon" className = "clock-icon"/>
          <p>10.4.</p>
          <p>18:00</p>
        </div>
        <div className="second-container">
          <img src={locationIcon} alt="location icon" className = "location-icon"/>
          <p>Dom mladih</p>
        </div>
      </div>
      <div className="location-and-teams">
        <img
          src={domMladih}
          alt="google-maps"
          className="google-maps-image"
        />
        <div className="teams-container">
          <p className="google-maps-text">Google maps lokacija</p>
          <p className="teams">ZUTI tim:</p>
          <ul className="team-lists">
            <li>Osoba A</li>
            <li>Osoba B</li>
            <li>Osoba C</li>
            <li>Osoba D</li>
            <li>Osoba E</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default YellowTeam;