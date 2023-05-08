import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav(props) {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Posts</NavLink></li>
        <li><NavLink to="/posts/new">NewPost</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;
