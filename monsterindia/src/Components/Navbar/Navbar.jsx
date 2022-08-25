import React, { useState } from "react";
// import styles from "./Navbar.module.css";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <div
      // className={styles.navbar}
      className="navbar"
      // style={{border: '10px solid black', height:"75px",display:"flex" }}
    >
      <div>
        <img
          src="https://media.monsterindia.com/trex/public/default/images/monster-logo.svg"
          alt=""
        />
      </div>

      {/* <p>JOB SEARCH</p> */}
      <li
        className="nav-item"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Link to="/search" className="nav-links" onClick={closeMobileMenu}>
          JOB SEARCH
          <i className="fas fa-caret-down" />
        </Link>
        {dropdown && <Dropdown />}
      </li>

      <p>WORK FROM HOME </p>
      <p>CAREER TIPS </p>
      <button className="btn">PREMIUM SERVICE</button>
      <p> MORE </p>
      <button className="btn2">JOBSEEKER LOGIN</button>
      <button className="btn2">FOR EMPLOYERS</button>
    </div>
  );
};

export default Navbar;
