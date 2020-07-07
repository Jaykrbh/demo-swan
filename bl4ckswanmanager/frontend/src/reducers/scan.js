import { GET_SCAN } from "../actions/types.js";

const initialState = {
  scan: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SCAN:
      return {
        ...state,
        scan: [action.payload],
      };
    default:
      return state;
  }
}
