import React from "react";
import "./style.css";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preload-container">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default Preloader;
