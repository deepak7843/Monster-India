import React from 'react'
import Ps_button from './Ps_button'
import styles from '../Ps_style/Ps_style.module.css'

const Ps_service_card = ({id, heading, details, image_url, price}) => {
  
  return (
    <div className={styles.serviceCard}>
      <div className={styles.image}>
        <img src={image_url} alt="image" />
      </div>
      <div className={styles.cardText}>
          <h2 className={styles.cardHeading}>{heading}</h2>
          <h2>{details}</h2>
          <button>`Starting at ${price}`</button>
          <h3><a href="">Benefits</a></h3>
      </div>
    </div>
  )
}

export default Ps_service_card