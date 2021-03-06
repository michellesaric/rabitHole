import React from "react";
import clockIcon from "../Assets/clockIcon.png";
import locationIcon from "../Assets/locationIcon.png";
import medeni from '../Assets/Medeni.png';
import Layout from "./Layout";
import "../style.css";

const BlueTeam = () => {
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
          <p>Fast food Medeni</p>
        </div>
      </div>
      <div className="location-and-teams">
        <img
          src={medeni}
          alt="google-maps"
          className="google-maps-image"
        />
        <div className="teams-container">
          <p className="google-maps-text">Google maps lokacija</p>
          <p className="teams">PLAVI tim:</p>
          <ul className="team-lists">
            <li>Alex Amanzi</li>
            <li>Jelena Svalina</li>
            <li>Marija Šustić</li>
            <li>Josip Svalina</li>
            <li>Lucia Vukorepa</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlueTeam;
