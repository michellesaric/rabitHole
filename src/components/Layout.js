import React from "react";
import mainText from "../Assets/mainText.gif";
import kidnappedNino from "../Assets/otetiNino.png";
import secondText from "../Assets/secondText.gif";
import "../style.css";

const Layout = () => {
  return (
    <div className="main-layout">
      <img src={mainText} alt="Gif teksta" className="text-gif" />
      <img src={kidnappedNino} alt="oteti Nino" className="kidnapped-nino" />
      <div className="second-text-container">
        <img src={secondText} alt="Gif teksta" className="second-text-gif" />
        <p>
          <span className="third-text first-position">Pratite</span>
          <span className="third-text second-position">upute</span>
          <span className="third-text third-position">ako</span>
          <span className="third-text fourth-position">želite</span>
          <span className="third-text fifth-position">Nina</span>
          <span className="third-text sixth-position">nazad</span>
        </p>
      </div>
    </div>
  );
};

export default Layout;
