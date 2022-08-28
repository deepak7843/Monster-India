import * as types from "./actionTypes";
import React from "react";
import { GET_SERVICES_DATA } from "./actionTypes";
import { GET_JOBS_DATA } from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  servicesData: [],
  jobsData: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_JOB_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case types.GET_JOB_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: payload,
      };
    case types.GET_JOB_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case GET_SERVICES_DATA: {
      //console.log(payload)
      return {
        ...state,
        servicesData: [...payload],
      };
    }
    case GET_JOBS_DATA: {
      //console.log(payload)
      return {
        ...state,
        jobsData: [...payload],
      };
    }

    default:
      return state;
  }
};

export { reducer };
