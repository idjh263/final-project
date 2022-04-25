import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import '../index.css';

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="header">
      <div className="header-title">
        <Link to="/">
         
        </Link>

        <nav className="nav">
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile">Me</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">SignUp</Link>
              <Link to="/">Home</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
