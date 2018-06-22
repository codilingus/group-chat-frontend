import { combineReducers } from "redux";
import { currentUserReducer } from "./current-user/index";
import { channelsReducer } from "./channels/index";
import { logReducer } from "./log/index";
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  channels: channelsReducer,
  log: logReducer,
  router: routerReducer 
});

export default rootReducer;
