import React from 'react';
import { Link } from 'react-router';

function Header() {
  return (
    <header>
      <nav className="nav toggle-nav" role="navigation">
        <ul className="section group">
          <li className="span_1_of_12 active">
            <Link to="/" data-title="Welcome to Robert Yarborough Studio" aria-hidden="true">
              <img src="./common/images/logo.png" alt="logo" />
            </Link>
          </li>
            {/* <li>
            <Link to="/about" data-title="Learn About Me" aria-hidden="true">About</Link>
          </li> */}
        </ul>
      </nav>
    </header>

  );
}

export default Header;
