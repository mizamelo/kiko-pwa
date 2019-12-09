import React from 'react';
import { Link } from 'react-router-dom';

import Home from '../../assets/home.svg';
import Profile from '../../assets/profile.svg';
import Dash from '../../assets/dash.svg';

import './styles.scss';

export default function Menu() {
  return (
    <div className="menu-container">
      <ul>
        <li>
          <Link to="/">
            <img height="30" src={Home} alt="Home"/>
          </Link>
        </li>
        <li>
          <Link to="/courses">
            <img height="30" src={Dash} alt="Dash"/>
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <img height="30" src={Profile} alt="Profile"/>
          </Link>
        </li>
      </ul>
    </div>
  );
}
