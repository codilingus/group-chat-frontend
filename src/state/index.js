import { combineReducers } from 'redux';
import { currentUserReducer } from './current-user/index';
import { channelsReducer } from './channels/index';
import { usersReducer } from './users/index';

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  channels: channelsReducer,
  users: usersReducer
});

export default rootReducer;