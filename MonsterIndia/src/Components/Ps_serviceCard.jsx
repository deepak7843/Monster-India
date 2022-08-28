import React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import styles from '../Ps_style/Ps_style.module.css';

const Ps_service_card = ({id, heading, details, image_url, price}) => {
  
  return (
    <div className={styles.serviceCard}>
      <div className={styles.image}>
        <img src={image_url} alt="image" />
      </div>
      <div className={styles.cardText}>
          <h2 className={styles.cardHeading}>{heading}</h2>
          <p>{details}</p>
          <Button colorScheme='purple'>Starting at &nbsp; <span className={styles.botton_card}>{price}</span></Button>
          <h6 className={styles.benefits}><a href="">Benefits</a></h6>
      </div>
    </div>
  )
}

export default Ps_service_card