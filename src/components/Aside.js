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
  const [sidebar, setSidebar] = useState([true, false, false]);
  const [isActive, setActive] = useState(false);

  const handleToggle = (e) => {
    setActive((prev) => {
      return e.target.id;
    });
    console.log(e.target.id);
    console.log(isActive);
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
          <div
            onClick={handleToggle}
            className={isActive === '1' ? 'active' : null}
          >
            <Link to="/" id="1">
              <span style={{ marginRight: '16px' }}>
                <FontAwesomeIcon icon={faHouse} />
              </span>
              Home
            </Link>
          </div>
        </li>
        <li>
          <div
            onClick={handleToggle}
            className={isActive === '2' ? 'active' : null}
          >
            <Link to="/about" id="2">
              <span style={{ marginRight: '16px' }}>
                <FontAwesomeIcon icon={faPerson} />
              </span>
              About
            </Link>
          </div>
        </li>
        <li onClick={handleToggle}>
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
