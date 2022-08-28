import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Ps_header from '../Components/Ps_header';
import Ps_service_card from '../Components/Ps_serviceCard';
import { getAllServices } from '../Redux/AppReducer/action';
import styles from '../Ps_style/Ps_style.module.css';
import Ps_contact from '../Components/Ps_contact';
import Ps_courses from '../Components/Ps_courses';
import Ps_jobsSearch from '../Components/Ps_jobsSearch';
import Footer from '../Components/Footer/Footer';



const Premium_Services = () => {

  const dispatch = useDispatch();

  const getServicesData = ()=>{
    axios.get("http://localhost:8080/services")
    .then((res)=>{
      dispatch(getAllServices(res.data));
      //console.log(res.data);
    })
    .catch(err=>{
      console.log(err)
    })
  }


  const services = useSelector(state=>state.AppReducer.servicesData);
  
  useEffect(()=>{
    getServicesData()
  }, [])
  return (
    <div>
        <Ps_header/>
        <div className={styles.serviceCard_Container}>
          {
            services.map(ele=>{return <Ps_service_card key={ele.id} id={ele.id} heading={ele.heading} image_url={ele.image_url} details={ele.detail} price={ele.price}/>})
          }
        </div>
        <Ps_contact/>
        <Ps_courses/>
        <Ps_jobsSearch/>
    </div>
  )
}

export default Premium_Services