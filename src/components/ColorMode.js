import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { ThemeContext } from '../App';

const ColorMode = () => {
  const [darkmode, setDarkMode] = useState(false);
  let { 재고, 가격 } = useContext(ThemeContext);
  return (
    <div
      className="switch_toggler"
      onClick={() => {
        setDarkMode(!darkmode);
      }}
    >
      {darkmode ? (
        <FontAwesomeIcon icon={faSun} />
      ) : (
        <FontAwesomeIcon icon={faMoon} />
      )}
      {가격}
    </div>
  );
};

export default ColorMode;
