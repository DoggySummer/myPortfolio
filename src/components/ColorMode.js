import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

const ColorMode = () => {
  const [darkmode, setDarkMode] = useState(true);

  const darkClick = () => {
    setDarkMode(!darkmode);
    darkmode
      ? document.documentElement.setAttribute('data-theme', 'dark')
      : document.documentElement.setAttribute('data-theme', 'light');
  };

  const makeRed = () => {
    document.documentElement.setAttribute('data-themeColor', 'red');
  };
  const makeBlue = () => {
    document.documentElement.setAttribute('data-themeColor', 'blue');
  };
  const makeOrange = () => {
    document.documentElement.setAttribute('data-themeColor', 'orange');
  };
  const makeGreen = () => {
    document.documentElement.setAttribute('data-themeColor', 'green');
  };

  return (
    <div className="switch_toggler">
      <div className="light_toggler" onClick={darkClick}>
        {darkmode ? (
          <FontAwesomeIcon icon={faMoon} className="darkMode" />
        ) : (
          <FontAwesomeIcon icon={faSun} className="lightMode" />
        )}
      </div>
      <div className="theme_toggler">
        <FontAwesomeIcon icon={faGear} style={{ marginRight: '4px' }} />
        <div className="theme_colors">
          <div className="themeCircle red" onClick={makeRed}></div>
          <div className="themeCircle blue" onClick={makeBlue}></div>
          <div className="themeCircle orange" onClick={makeOrange}></div>
          <div className="themeCircle green" onClick={makeGreen}></div>
        </div>
      </div>
    </div>
  );
};

export default ColorMode;
