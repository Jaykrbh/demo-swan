import axios from "axios";
import { tokenConfig } from "./auth";
import { GET_SCAN , GET_PRINT } from "./types";



export const getScan = (ip) => (dispatch, getState) => {
    axios
      .get(`/api/auth/cmd?ip=${ip}`, tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: GET_SCAN,
          payload: res.data,
        });
      })
      .catch((err) =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };

  export const getPrint = () => (dispatch, getState) => {
    axios
      .get('/api/auth/export', tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: GET_PRINT,
          payload:res.data
        });
      })
      .catch((err) =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };
