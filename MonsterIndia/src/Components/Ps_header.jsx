import React from 'react'
import { Button } from '@chakra-ui/react'
import { MdCall } from "react-icons/md"
import styles from '../Ps_style/Ps_style.module.css';

const Ps_header = () => {
  return (
    <>
    <div>
      <p className={styles.index}>HOME &nbsp; &#62; &nbsp;PREMIUM SERVICES</p>
    </div>
    <div className={styles.headerContainer}>
        <div className={styles.main_heading}>
            <div>
            <h1 className={styles.heading}>Buy Premium Services</h1>
            <h2 className={styles.subHeading}>Give your job search journey a boost</h2>
            </div>
            <div className={styles.rightButton}>
            <span ><Button className={styles.callButton} colorScheme='purple' leftIcon={<MdCall />}>Call me back</Button></span>
            </div>
        </div>
        <p>Premium Services are paid services specially crafted for job seekers. 
            These services are offered by Monster to help the seekers get in 
            touch with Industry Experts and professionals. It helps candidates 
            with their Resume, highlighting profiles in our database and making 
            them job-ready through Mock Interviews!
        </p>
    </div>
    </>
  )
}

export default Ps_header