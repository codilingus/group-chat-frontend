import { combineReducers } from "redux";
import { currentUserReducer } from "./current-user/index";
import { channelsReducer } from "./channels/index";
import { loginReducer } from "./login/index";
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  channels: channelsReducer,
  login: loginReducer,
  router: routerReducer 
});

export default rootReducer;
