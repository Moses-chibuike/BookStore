import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

// stylesheet
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="title-div">
        <h2 className="title">BOOKSTORE CMS</h2>
        <div className="menu">
          <nav>
            <ul className="menu-list">
              <li className="list-item">
                <Link to="/" id="bo">BOOKS</Link>
              </li>
              <li className="list-item">
                <Link to="/categories" id="cat">CATEGORIES</Link>
              </li>
            </ul>
          </nav>

          <Outlet />
        </div>
      </div>
      <FaUserAlt className="icon" />
    </div>
  );
}

export default Navbar;
