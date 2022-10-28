import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <h2 className="header__logo">Devmountain Eatery</h2>
      <div className="header__center">
      </div>
      <nav className="header__nav">
        <Link to=""><button className="header__button">Home</button></Link>
          <Link to="/newRecipe"><button className="header__button">Add Recipe</button></Link>
      </nav>
    </header>
  );
};

export default Header;
