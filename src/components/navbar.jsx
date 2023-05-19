import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';
import { signoutUser } from '../actions/index';

function Nav(props) {
  const navigate = useNavigate();
  const authenticated = useSelector((state) => state.auth.authenticated);

  const handleSignout = () => {
    signoutUser(navigate);
  };

  if (authenticated) {
    return (
      <nav>
        <ul>
          <li><NavLink to="/">Posts</NavLink></li>
          <li><NavLink to="/posts/new">NewPost</NavLink></li>
          <li><button type="button" onClick={handleSignout}>Sign Out</button></li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav>
        <ul>
          <li><NavLink to="/">Posts</NavLink></li>
          <li><NavLink to="/posts/new">NewPost</NavLink></li>
          <li><NavLink to="/signin">Sign In</NavLink></li>
          <li><NavLink to="/signup">Sign Up</NavLink></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
