import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComment,
  faHouse,
  faList,
  faPerson,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Aside = () => {
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
          <Link to="/" className="active">
            <span style={{ marginRight: '16px' }}>
              <FontAwesomeIcon icon={faHouse} />
            </span>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            <span style={{ marginRight: '16px' }}>
              <FontAwesomeIcon icon={faPerson} />
            </span>
            About
          </Link>
        </li>
        <li>
          <Link to="/project">
            <span style={{ marginRight: '16px' }}>
              <FontAwesomeIcon icon={faList} />
            </span>
            my Project
          </Link>
        </li>
        <li>
          <Link to="/">
            <span style={{ marginRight: '16px' }}>
              <FontAwesomeIcon icon={faComment} />
            </span>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Aside;
