import { combineReducers } from "redux";
import { currentUserReducer } from "./current-user/index";
import { channelsReducer } from "./channels/index";

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  channels: channelsReducer
});

export default rootReducer;