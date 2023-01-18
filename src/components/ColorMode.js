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
        <FontAwesomeIcon icon={faGear} />
        <div className="theme_colors">ㅁㄴㅇㄹ</div>
      </div>
    </div>
  );
};

export default ColorMode;
