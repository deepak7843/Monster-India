
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FilterCard from '../Components/FilterCard';
import JobCard from '../Components/JobCard';
import Pagination from '../Components/Pagination';
import { getJobData, getJobFailure, getJobRequest, getJobSuccess } from '../Redux/AppReducer/action';


const JobPage = () => {
  const dispatch = useDispatch();
  const dataJob = useSelector((state)=> state.AppReducer.data)
  const [showPerPage , setShowPerPage] = useState(5);
  const [pagination , setPagination] = useState({
    start:0,
    end:showPerPage
  })

  const onPaginationChange = (start, end) =>{
    setPagination({start:start , end:end})
  }

  
 useEffect(()=>{
    dispatch(getJobData())
 },[])
   
   
   console.log(dataJob)
   


  return (
    <div   style={{marginBottom:"100%"}}
    > 
       <div> <Pagination total={dataJob.length} showPerPage={showPerPage} onPaginationChange={onPaginationChange} />  </div>
      <div style={{display:"flex",gap:"30px"}} >
         <div> <FilterCard/> </div> 
         <div  style={{width:"95%", height:"400px",padding:"10px",  margin:"auto",textAlign:"left"}} >  {dataJob.slice(pagination.start,pagination.end).map((elem)=>{
          return <JobCard key={elem.id} elem={elem} />
         })} </div>
      </div>
         
        
    </div>
  )
}

export default JobPage;
