import React from 'react';
import { Link } from 'react-router-dom';

const personalGreeting = (currentUser, logout) => (
  <nav>
    <h2>Hello, {currentUser.username}</h2>
    <button onClick={logout}>Log Out</button>
  </nav>
);

const sessionLinks = () => (
  <nav>
    <Link to="/login">Log In</Link>
    <Link to="/signup">Sign Up</Link>
  </nav>
);

const Greeting = ({ currentUser, logout}) => {
  if (currentUser) {
    return personalGreeting(currentUser, logout);
  } else {
    return sessionLinks();
  }
}

export default Greeting;
