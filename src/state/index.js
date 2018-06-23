import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { currentUserReducer } from './current-user/index';
import { channelsReducer } from './channels/index';
import { usersReducer } from './users/index';
import { messagesReducer } from './messages/index';
import { sessionUserReducer } from "./session-user/index";
import { activeUsersReducer } from './active-users/index';

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  channels: channelsReducer,
  users: usersReducer,
  messages: messagesReducer,
  sessionUser: sessionUserReducer,
  router: routerReducer,
  activeUsers: activeUsersReducer
});

export default rootReducer;
