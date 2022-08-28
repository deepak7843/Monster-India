import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { FcGoogle } from "react-icons/fc"
import { BsFacebook } from "react-icons/bs"
import styles from '../Ps_style/Signup.module.css';
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const navigate= useNavigate()
  
const handleClick=()=>{
  alert("Signup successfully done!")

  navigate("/Login")

}

  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.heading}>Create an Account <span>(It's free)</span></h2>
        <h4 className={styles.subHeading}>It only takes a couple of minutes to get started</h4>
        <div className={styles.buttonContainer}>
        <Button className={styles.gButton} leftIcon={<FcGoogle />} colorScheme='gray' variant='solid'>Signup with google</Button>
        <Button leftIcon={<BsFacebook style={{color:'blue'}}/>} colorScheme='gray' variant='solid'>Signup with facebook</Button>
        </div>
      </div>
      <div>
      <FormControl isRequired>
        <FormLabel>First name</FormLabel>
        <Input className={styles.input} placeholder='First name' type='text'/>
        <FormLabel>Email</FormLabel>
        <Input className={styles.input} placeholder='Email' type='email'/>
        <FormLabel>Password</FormLabel>
        <Input className={styles.input} placeholder='Password' type='password'/>
        <FormLabel>Confirm Password</FormLabel>
        <Input className={styles.input} placeholder='Confirm Password' type='password'/>
        <Button   className={styles.signupButton} colorScheme='purple' 
        
        // onClick={()=>alert("SignUp Successful!")}

        onClick={handleClick}


        >SignUp</Button>
      </FormControl>
      </div>
    </div>
  )
}

export default Signup