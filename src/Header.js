import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div className="header">
      {/* <img 
            className='header__logo'
            src=""
        /> */}
      <h3 className="header__logo">Cartmax</h3>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header-option">
          <span className="header__optionLineOne">Hello</span>
          <span className="header__optionLineTwo">SignIn</span>
        </div>
        <div className="header-option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header-option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
