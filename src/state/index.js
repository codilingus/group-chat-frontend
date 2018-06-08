import { combineReducers } from "redux";
import { currentUserReducer } from "./current-user/index";
import { channelsReducer } from "./channels/index";
import { loginReducer } from "./login/index";

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  channels: channelsReducer,
  login: loginReducer 
});

export default rootReducer;