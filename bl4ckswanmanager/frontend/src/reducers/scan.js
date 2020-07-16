import { GET_SCAN, GET_PRINT } from "../actions/types.js";

const initialState = {
  scan: [],
  
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SCAN:
      return {
        ...state,
        scan: action.payload,
      };
      case GET_PRINT:
        return{
          ...state,
          scan: action.payload
        }
    default:
      return state;
  }
}
