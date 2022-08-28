import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from 'react-router-dom';
import { getJobData, sortAscCity, sortAscending, sortDescending, sortDesCity } from "../Redux/AppReducer/action";

const FilterCard = () => {
    const dispatch= useDispatch();
    const dataJob = useSelector((state)=> state.AppReducer.data)

  // DO NOT CHANGE THE ORDER of the category filters: ie. Analog, Digital, Chronograph in the UI
  const [searchParams , setSearchParams] = useSearchParams();
  const  initialCategoryParams=  searchParams.getAll("category");
  const [category , setCategory] = useState(initialCategoryParams || []);

  const handleCategoryChange = (e) =>{
    const option = e.target.value;

    let newCategory = [...category];
    if (category.includes(option)){
     newCategory.splice(newCategory.indexOf(option),1)
    }
    else{
         newCategory.push(option)
    }
    setCategory(newCategory)

    if (option==="salary_asc")
    {
        dispatch(sortAscending())
    }
    else if (option==="salary_desc"){
        dispatch(sortDescending())
    }
     if (option==="citya2z")
    {
        dispatch(sortAscCity())
    }
    else if (option==="cityz2a"){
        dispatch(sortDesCity())
    }
  }

  useEffect(()=>{
    dispatch(getJobData())
 },[])
   
  
  useEffect(()=>{
    if(category){
     const params= {};
     category && (params.category = category);
     setSearchParams(params);
    }
  },[category,setSearchParams])

  return (
    <div style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", width:"250px", padding:"20px",marginLeft:"50px" }}>
      <p style={{fontSize:"18px", fontWeight:"bold" }}  >Filter By</p>
     
      <div data-testid="filter-category">
      <p style={{fontSize:"16px", fontWeight:"bold", color:"teal" }}  >Salary</p>
        <div>
            
          <input type="checkbox" defaultChecked={category.includes("Salary")} onChange={handleCategoryChange}  value="salary_asc" />
          <label>Ascending</label>
          <input type="checkbox" defaultChecked={category.includes("Salary")} onChange={handleCategoryChange}  value="salary_desc" />
          <label>Descending</label>
        </div>
       <p style={{fontSize:"16px", fontWeight:"bold", color:"teal" }}  >Experience</p>
        <div>
          <input type="checkbox" defaultChecked={category.includes("Experience")} onChange={handleCategoryChange} value="experienceh2l" />
          <label>High-Low</label>
          <input type="checkbox" defaultChecked={category.includes("Experience")} onChange={handleCategoryChange} value="experiencel2h" />
          <label>Low-High</label>
        </div>
        <p style={{fontSize:"16px", fontWeight:"bold", color:"teal" }} >City</p>
        <div>
          <input type="checkbox" defaultChecked={category.includes("City")} onChange={handleCategoryChange} value="citya2z" />
          <label>A-Z</label>
          <input type="checkbox" defaultChecked={category.includes("City")} onChange={handleCategoryChange} value="cityz2a" />
          <label>Z-A</label>
        </div>
      </div>
    </div>
  );
};

export default FilterCard;
