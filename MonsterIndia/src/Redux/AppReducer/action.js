import * as types from "./actionTypes";
import axios from "axios"

import { GET_SERVICES_DATA } from "./actionTypes"
import { GET_JOBS_DATA } from "./actionTypes";

export const getAllServices = (payload)=>{
    //console.log(payload);
    return {
        type: GET_SERVICES_DATA,
        payload : payload
    }
}

export const getAllJobs = (payload)=>{
    //console.log(payload);
    return {
        type: GET_JOBS_DATA,
        payload : payload
    }
}

const getJobRequest = ()=>{
    return {
        type: types.GET_JOB_REQUEST
    }
}
const getJobSuccess = (payload)=>{
    return {
        type: types.GET_JOB_SUCCESS,
        payload
    }
}
const getJobFailure = ()=>{
    return {
        type: types.GET_JOB_FAILURE
    }
}
 
const getJobData = ()=>(dispatch) =>{
    dispatch(getJobRequest());
    axios.get("http://localhost:8080/jobData").then
    ((res)=>dispatch(getJobSuccess(res.data))).catch
    ((e)=>dispatch(getJobFailure()))
}

const sortAscending = (params)=> (dispatch)=> {
    dispatch(getJobRequest());

    axios.get("http://localhost:8080/jobData", params).then
    ((res)=>dispatch(getJobSuccess(res.data.sort(function(a,b){
      return a.salary - b.salary
    }))) ). catch((e)=>dispatch(getJobFailure()) )
}

const sortDescending = (params)=> (dispatch)=> {
  dispatch(getJobRequest());

  axios.get("http://localhost:8080/jobData", params).then
  ((res)=>dispatch(getJobSuccess(res.data.sort(function(a,b){
    return b.salary - a.salary
  }))) ). catch((e)=>dispatch(getJobFailure()) )
}
const sortAscCity = (params)=> (dispatch)=> {
    dispatch(getJobRequest());

    axios.get("http://localhost:8080/jobData", params).then
    ((res)=>dispatch(getJobSuccess(res.data.sort(function(a,b){
        if(a.loc < b.loc) { return -1; }
        if(a.loc > b.loc) { return 1; }
      return 0
    }))) ). catch((e)=>dispatch(getJobFailure()) )
}

const sortDesCity = (params)=> (dispatch)=> {
  dispatch(getJobRequest());

  axios.get("http://localhost:8080/jobData", params).then
  ((res)=>dispatch(getJobSuccess(res.data.sort(function(a,b){
    if(a.loc > b.loc) { return -1; }
    if(a.loc < b.loc) { return 1; }
      return 0
  }))) ). catch((e)=>dispatch(getJobFailure()) )
}


export {getJobRequest,getJobSuccess, getJobFailure, getJobData , sortAscending, sortDescending, sortAscCity,sortDesCity };