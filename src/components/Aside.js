import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComment,
  faHouse,
  faList,
  faPerson,
} from '@fortawesome/free-solid-svg-icons';

/**
 * !나중에 a태그들 useNavigate으로 갈아엎어야함
 */
const Aside = () => {
  return (
    <div className="aside">
      <div className="logo">
        <a href="#">JGW</a>
      </div>
      <div className="nav_toggler">
        <span></span>
      </div>
      <ul className="nav">
        <li>
          <a href="#" className="active">
            <span style={{ marginRight: '16px' }}>
              <FontAwesomeIcon icon={faHouse} />
            </span>
            Home
          </a>
        </li>
        <li>
          <a href="#">
            <span style={{ marginRight: '16px' }}>
              <FontAwesomeIcon icon={faPerson} />
            </span>
            About
          </a>
        </li>
        <li>
          <a href="#">
            <span style={{ marginRight: '16px' }}>
              <FontAwesomeIcon icon={faList} />
            </span>
            my Project
          </a>
        </li>
        <li>
          <a href="#">
            <span style={{ marginRight: '16px' }}>
              <FontAwesomeIcon icon={faComment} />
            </span>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Aside;
