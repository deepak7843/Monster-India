import React, { useEffect } from 'react' ;
import { MdLocationPin } from 'react-icons/md'
import {BsFillBriefcaseFill} from "react-icons/bs"
import {FaCoins} from "react-icons/fa"
import {BsStar} from "react-icons/bs";
import {FaShareAlt} from "react-icons/fa"

import { getJobData } from '../Redux/AppReducer/action';
import { useNavigate } from 'react-router-dom';

const JobCard = ({elem}) => {
  const navigate  = useNavigate()
  const handleClick = () => {
    alert("You have applied fot the job succesfully");
    navigate("/");

  }
 
  return (
    <div style={{
      width:"75%",boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", height:"auto",marginLeft:"100px"
    // ,border:"1px solid red"
     }}>
        <div  style={{width:"95%", height:"400px",padding:"10px",  margin:"auto",textAlign:"left"}}>
              <h4  >{elem.medium}</h4>
              <p style={{color:"#6c54da"}} >{elem.company}</p>
              <div style={{display:"flex", justifyContent:"space-between"}}>
                   <p>  <MdLocationPin/>{elem.loc} </p> 
                   <p> <BsFillBriefcaseFill/> {elem.experience}  </p>
                   <p><FaCoins/>{elem.salary} INR </p>
                </div>
                <p>Dear Candidates</p>
                <p>We are hiring...</p>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                  <h4>Skills:</h4>
                  <p>customer support,  </p>
                  <p> voice support, </p>
                  <p>bpo, </p>
                  <p> call center</p>
                </div>
               <div style={{display:"flex", justifyContent:"space-between", backgroundColor:"#ebebeb",padding:"10px" }}>
                    <div style={{display:"flex", justifyContent:"space-around"}}>
                      <p>{elem.posted}|</p>
                      <p style={{color:"#6c54da"}}>Work From Home |</p>
                      <p style={{color:"#6c54da"}}>Jobs for covid 19</p>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between", padding:"10px", fontSize:"20px" }}>
                      <div><BsStar/></div> <div><FaShareAlt/> </div> <div>
                        <button style={{backgroundColor:"#6c54da",padding:"2px",color:"white", border:"none",width:"80px",height:"35px", cursor:"pointer"  }} onClick={handleClick}  >Apply</button></div> 
                    </div>
                </div> 

        </div>
    </div>
  )
}

export default JobCard
