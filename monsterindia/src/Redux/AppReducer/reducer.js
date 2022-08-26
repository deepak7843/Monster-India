import { GET_SERVICES_DATA } from "./actionTypes";

const initialState = {
    servicesData: [],
    isLoading: false,
    isError: false,
  };
  
  export const reducer = (oldState = initialState, {type, payload}) => {
    switch(type){
      case GET_SERVICES_DATA:{
        //console.log(payload)
        return{
          ...oldState,
          servicesData:[...payload]
        }
      }
      default:{
        return oldState;
      }
    }
  };