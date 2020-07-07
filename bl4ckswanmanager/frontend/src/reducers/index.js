import { combineReducers } from "redux";
import leads from "./leads";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";
import scan from "./scan";

export default combineReducers({
  leads,
  errors,
  messages,
  auth,
  scan,
});
