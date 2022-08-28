import React, { useState } from "react";
// import styles from "./Navbar.module.css";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import DropWfh from "./DropWfh";
import DropTips from "./DropTips";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropWfh, setDropWfh] = useState(false);
  const [dropTips, setDropTips] = useState(false);

  const navigate = useNavigate();
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
  //////////////  wfh ////////////////////////

  const onMouseWfh = () => {
    if (window.innerWidth < 960) {
      setDropWfh(false);
    } else {
      setDropWfh(true);
    }
  };

  const onMouseLeaveWfh = () => {
    if (window.innerWidth < 960) {
      setDropWfh(false);
    } else {
      setDropWfh(false);
    }
  };

  //////////////  TIPS ////////////////////////

  const onMouseTips = () => {
    if (window.innerWidth < 960) {
      setDropTips(false);
    } else {
      setDropTips(true);
    }
  };

  const onMouseLeaveTips = () => {
    if (window.innerWidth < 960) {
      setDropTips(false);
    } else {
      setDropTips(false);
    }
  };

  return (
    <div
      // className={styles.navbar}
      className="navbar"
      // style={{border: '10px solid black', height:"75px",display:"flex" }}
    >
      {/* <link to="/" > */}
      {/* <div> */}
      {/* <navigate>  </navigate> */}
        <img onClick={() =>navigate("/")}
          src="https://media.monsterindia.com/trex/public/default/images/monster-logo.svg"
          alt=""
        />
      {/* </div> */}
      {/* </link> */}

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

      {/* <p>WORK FROM HOME </p> */}
      <li
        className="nav-item"
        onMouseEnter={onMouseWfh}
        onMouseLeave={onMouseLeaveWfh}
      >
        <Link to="/search" className="nav-links" onClick={closeMobileMenu}>
          WORK FROM HOME
          <i className="fas fa-caret-down" />
        </Link>
        {dropWfh && <DropWfh />}
      </li>

      {/* <p>CAREER TIPS </p> */}

      <li
        className="nav-item"
        onMouseEnter={onMouseTips}
        onMouseLeave={onMouseLeaveTips}
      >
        <Link to="/careerPage" className="nav-links" onClick={closeMobileMenu}>
          CAREER TIPS <i className="fas fa-caret-down" />
        </Link>
        {dropTips && <DropTips />}
      </li>

<Link to="/premium" >
      <button className="btn2">PREMIUM SERVICE</button>
      </Link>


      <p> MORE </p>

      <Link to="/login">
        <button className="btn2">JOBSEEKER LOGIN</button>
      </Link>

      <Link to="/">
        <button className="btn2">FOR EMPLOYERS</button>
      </Link>
    </div>
  );
};

export default Navbar;
