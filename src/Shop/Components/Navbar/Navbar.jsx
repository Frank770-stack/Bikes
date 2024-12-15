import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">The Cycling Network</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li
          className="shop-link"
          onMouseEnter={handleDropdownToggle}
          onMouseLeave={handleDropdownToggle}
        >
          <span>Shop</span>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/shop/road">Road Bikes</Link>
              </li>
              <li>
                <Link to="/shop/gravel">Gravel Bikes</Link>
              </li>
              <li>
                <Link to="/shop/electric">Electric Bikes</Link>
              </li>
              <li>
                <Link to="/shop/kids">Kids Bikes</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
