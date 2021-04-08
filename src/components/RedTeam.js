import React from "react";
import clockIcon from "../Assets/clockIcon.png";
import locationIcon from "../Assets/locationIcon.png";
import dardin from '../Assets/dardin.png';
import Layout from "./Layout";
import "../style.css";

const RedTeam = () => {
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
          <p>Đardin</p>
        </div>
      </div>
      <div className="location-and-teams">
        <img
          src={dardin}
          alt="google-maps"
          className="google-maps-image"
        />
        <div className="teams-container">
          <p className="google-maps-text">Google maps lokacija</p>
          <p className="teams">CRVENI tim:</p>
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

export default RedTeam;
