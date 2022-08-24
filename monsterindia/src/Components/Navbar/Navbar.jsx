import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {


  return (
    <div  className={styles.navbar} 
    // style={{border: '10px solid black', height:"75px",display:"flex" }}
    > 
 <div><img src="https://media.monsterindia.com/trex/public/default/images/monster-logo.svg" alt="" /></div>
  
  <p>JOB SEARCH</p>
  <p>WORK FROM HOME </p>
  <p>CAREER TIPS </p>
  <button className={styles.btn} >PREMIUM SERVICE</button>
  <p> MORE </p>
<button className={styles.btn2} >JOBSEEKER LOGIN</button>
<button className={styles.btn2}>FOR EMPLOYERS</button>
    </div>
  )
}

export default Navbar
