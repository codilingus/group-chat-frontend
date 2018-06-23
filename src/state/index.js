import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { currentUserReducer } from './current-user/index';
import { channelsReducer } from './channels/index';
import { usersReducer } from './users/index';
import { messagesReducer } from './messages/index';
import { loginReducer } from "./login/index";
import { activeUsersReducer } from './active-users/index';

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  channels: channelsReducer,
  users: usersReducer,
  messages: messagesReducer,
  login: loginReducer,
  router: routerReducer,
  activeUsers: activeUsersReducer
});

export default rootReducer;
