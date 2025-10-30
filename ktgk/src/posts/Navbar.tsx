import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Blog Management</div>
      <ul className="navbar-links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}
            end
          >
            Trang chủ
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/create"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Viết bài
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
