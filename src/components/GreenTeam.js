import React from "react";
import clockIcon from "../Assets/clockIcon.png";
import locationIcon from "../Assets/locationIcon.png";
import krafneKodMate from "../Assets/krafneKodMate.png";
import Layout from "./Layout";
import "../style.css";

const GreenTeam = () => {
  return (
    <div className="black-background">
      <Layout />
      <div className="time-and-place-container">
        <div className="first-container">
          <img src={clockIcon} alt="clock icon" className="clock-icon" />
          <p>10.4.</p>
          <p>18:00</p>
        </div>
        <div className="second-container">
          <img
            src={locationIcon}
            alt="location icon"
            className="location-icon"
          />
          <p>Krafne kod Mate</p>
        </div>
      </div>
      <div className="location-and-teams">
        <img
          src={krafneKodMate}
          alt="google-maps"
          className="google-maps-image"
        />
        <div className="teams-container">
          <p className="google-maps-text">Google maps lokacija</p>
          <p className="teams">ZELENI tim:</p>
          <ul className="team-lists">
            <li>Valentina Mindoljević</li>
            <li>Jere Mandušić</li>
            <li>Alessia Amanzi</li>
            <li>Klara Bruna Tomić</li>
            <li>Roko Radanović</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GreenTeam;
