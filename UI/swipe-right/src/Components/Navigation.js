import React from "react";
import './Navigation.css';
import whiteLogo from "../images/tinder_logo_white.png";
import colorLogo from "../images/color-logo-tinder.png";

const Navigation = ({ authToken, minimal, setShowModal, showModal, setIsSignUp }) => {
    const handleClick = () => {
      setShowModal(true);
      setIsSignUp(false);
    };
  
    return (
        <nav>
          <div className="logo__container">
            <img className="logo" src={minimal ? colorLogo : whiteLogo} alt="logo"/>
          </div>
          {!authToken && !minimal && (
            <button className="nav__button" onClick={handleClick} disabled={showModal}>
              Log in
            </button>
          )}
        </nav>
      );
    };
  export default Navigation;