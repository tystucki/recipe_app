import React from "react";
import salmon from "../../assets/salmon.jpg";
import { Link } from "react-router-dom";
import './AdBanner.css'

const AdBanner = () => {
  return (
    <div className="banner"
      style={{
        background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.4),
          rgba(0, 0, 0, 0.4)),
          url(${salmon})`,
        backgroundSize: "cover",
      }}
    >
      <div className="banner__info">
        <div className="title">
        <h3>New Recipe</h3>
        </div>
        
        
        <div className="banner__title">
        <h1>Pineapple Salmon</h1>
        </div>
        <div className="banner__description">
        <h3>
          This recipe consists of fresh wild Alaskan salmon, rubbed in a bbq
          brown sugar rub, baked for 25 minutes on a bed of pineapple, and garnished in butter, garlic, and chives. You won’t want to miss it!
        </h3>
        </div>
       
        <Link to="/recipe/3">
          <button className="blue-btn">Check it out</button>
        </Link>
      </div>
      </div>
  );
};

export default AdBanner;
