import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComment,
  faHouse,
  faList,
  faPerson,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Aside = () => {
  const [isActive, setActive] = useState('1');

  const handleToggle = (e) => {
    setActive((prev) => {
      return e.target.id;
    });
  };
  return (
    <div className="aside">
      <div className="logo">
        <Link to="/">JGW</Link>
      </div>
      <div className="nav_toggler">
        <span></span>
      </div>
      <ul className="nav">
        <li>
          <div onClick={handleToggle}>
            <Link to="/" id="1" className={isActive === '1' ? 'active' : null}>
              <span style={{ marginRight: '16px' }}>
                <FontAwesomeIcon icon={faHouse} />
              </span>
              Home
            </Link>
          </div>
        </li>
        <li>
          <div onClick={handleToggle}>
            <Link
              to="/about"
              id="2"
              className={isActive === '2' ? 'active' : null}
            >
              <span style={{ marginRight: '16px' }}>
                <FontAwesomeIcon icon={faPerson} />
              </span>
              About
            </Link>
          </div>
        </li>
        <li>
          <div onClick={handleToggle}>
            <Link
              to="/project"
              id="3"
              className={isActive === '3' ? 'active' : null}
            >
              <span style={{ marginRight: '16px' }}>
                <FontAwesomeIcon icon={faList} />
              </span>
              my Project
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Aside;
