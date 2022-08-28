import React from 'react'
import styles from '../Ps_style/Ps_style.module.css';
import {
    InputGroup,
    FormLabel,
    InputLeftAddon,
    Button,
  } from '@chakra-ui/react'
  import { Input } from '@chakra-ui/react'

const Ps_contact = () => {
  return (
    <div>
        <div className={styles.contactForm}>
              <div className={styles.staticContact}>
                <h3>Talk to our expert</h3>
                <div className={styles.contactImg}>
                <img  src="https://media.monsterindia.com/trex/public/default/images/career-services/career-contactUs/humanFig2.svg" alt="contact image" />
                </div>
                <h3 className={styles.toll}>Toll Free No: 1-800-4196666</h3>
                <h3 className={styles.toll}>Toll No: +91-40-66116611</h3>
              </div>
              <div className={styles.contact}>
                <h3>CONTACT US</h3>
                <h5>Our executive will get in touch with you soon</h5>
                <FormLabel>Name &nbsp;<span className={styles.req}>*</span></FormLabel>
                <Input className={styles.input} type='text' placeholder='Enter your full name' />
                <FormLabel>Email Id &nbsp;<span className={styles.req}>*</span></FormLabel>
                <Input className={styles.input} type='email' placeholder='Enter your email id'/>
                <FormLabel>Mobile No &nbsp;<span className={styles.req}>*</span></FormLabel>
                <InputGroup>
                  <InputLeftAddon className={styles.input} children='+91' />
                  <Input className={styles.input} type='tel' placeholder='Enter your phone number' />
              </InputGroup>
              <Button className={styles.formButton} colorScheme='purple'>Call me back</Button>
              </div>
        </div>
    </div>
  )
}

export default Ps_contact