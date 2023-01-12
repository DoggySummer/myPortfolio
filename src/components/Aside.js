import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faComment,
  faHouse,
  faList,
  faPerson,
  faQuestion,
} from '@fortawesome/free-solid-svg-icons';

/**
 * !나중에 a태그들 useNavigate으로 갈아엎어야함
 */
const Aside = () => {
  return (
    <div className="aside">
      <div className="logo">
        <a href="#">
          <span>A</span>tlas
        </a>
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
              <FontAwesomeIcon icon={faQuestion} />
            </span>
            About
          </a>
        </li>
        <li>
          <a href="#">
            <span style={{ marginRight: '16px' }}>
              <FontAwesomeIcon icon={faPerson} />
            </span>
            Services
          </a>
        </li>
        <li>
          <a href="#">
            <span style={{ marginRight: '16px' }}>
              <FontAwesomeIcon icon={faList} />
            </span>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#">
            <span style={{ marginRight: '16px' }}>
              <FontAwesomeIcon icon={faBriefcase} />
            </span>
            Portfolio
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
