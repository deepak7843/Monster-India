import Ps_jobSearchDetails from './Ps_jobSearchDetails'
import { getAllJobs } from '../Redux/AppReducer/action';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../Ps_style/Ps_style.module.css';

const Ps_jobsSearch = () => {

    const dispatch = useDispatch();


    const getJobsData = ()=>{
        axios.get("http://localhost:8080/jobsSearch")
        .then((res)=>{
          dispatch(getAllJobs(res.data));
        })
        .catch(err=>{
          console.log(err)
        })
      }

    const jobs = useSelector(state=>state.AppReducer.jobsData);


    useEffect(()=>{
        getJobsData()
      }, [])
  return (
    <div className={styles.jobSearchContainer}>
        {
            jobs.map((ele)=>{return <Ps_jobSearchDetails key={ele.name} ele={ele}/>})
        }
    </div>
  )
}

export default Ps_jobsSearch