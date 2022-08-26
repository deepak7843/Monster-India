import { GET_SERVICES_DATA } from "./actionTypes"
export const getAllServices = (payload)=>{
    //console.log(payload);
    return {
        type: GET_SERVICES_DATA,
        payload : payload
    }
}