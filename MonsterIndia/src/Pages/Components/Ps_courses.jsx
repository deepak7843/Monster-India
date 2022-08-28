import React from 'react'
import styles from '../Ps_style/Ps_style.module.css';

const Ps_courses = () => {
  return (
    <div>
        <div className={styles.onlineCources}>
          <div>
            <div className={styles.courseImage}>
              <img src="https://media.monsterindia.com/trex/public/default/images/career-services/monster-education.png" alt="" />
            </div>
          </div>
          <div className={styles.courseText}>
            <div className={styles.courseImgContainer}>
            <img src="https://media.monsterindia.com/trex/public/default/images/career-services/monster-education-logo.png" alt="" />
            </div>
            <h3>Expand your learnings and skills, take an online</h3>
            <h3>certificate course to further your career growth.</h3>
            <div className={styles.courseContainer}>
              <div>
                <div className={styles.courseName}><img className={styles.cap} src="https://media.monsterindia.com/trex/public/default/images/career-services/education%20cap.png" alt="" /> <span>Technology Courses</span></div>
                <div className={styles.courseName}><img className={styles.cap} src="https://media.monsterindia.com/trex/public/default/images/career-services/education%20cap.png" alt="" /> <span>Law &amp; Security Courses</span></div>
                <div className={styles.courseName}><img className={styles.cap} src="https://media.monsterindia.com/trex/public/default/images/career-services/education%20cap.png" alt="" /> <span>Business &amp; Management Courses</span></div>
                <div className={styles.courseName}><img className={styles.cap} src="https://media.monsterindia.com/trex/public/default/images/career-services/education%20cap.png" alt="" /> <span>Finance ManagementCourses</span></div>
              </div>
              <div>
                <div className={styles.courseName}><img className={styles.cap} src="https://media.monsterindia.com/trex/public/default/images/career-services/education%20cap.png" alt="" /> <span>Marketing and Communication Courses</span></div>
                <div className={styles.courseName}><img className={styles.cap} src="https://media.monsterindia.com/trex/public/default/images/career-services/education%20cap.png" alt="" /> <span>Quality Management Courses</span></div>
                <div className={styles.courseName}><img className={styles.cap} src="https://media.monsterindia.com/trex/public/default/images/career-services/education%20cap.png" alt="" /> <span>Recruting &amp; Communication Courses</span></div>
                <div className={styles.viewAllCourses}><a href="#">View All Courses</a></div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Ps_courses