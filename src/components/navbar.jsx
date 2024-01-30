import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPlus } from '@fortawesome/free-solid-svg-icons';

function Nav(props) {
  return (
    <nav>
      <ul>
        <li><NavLink to="/"><FontAwesomeIcon className="home" icon={faHouse} size="lg" /></NavLink></li>
        <li><NavLink to="/posts/new"><FontAwesomeIcon className="plus" icon={faPlus} size="lg" /></NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;
