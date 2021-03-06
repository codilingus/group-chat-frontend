import { createSelector } from 'reselect';
import { last } from 'lodash';

export const selectMessages = state => state.messages.messages;
export const conversationSelector = state => state.messages;

export const selectLastMessage = createSelector(
  selectMessages,
  message => last(message)
);

export const selectLastMessageTimestamp = createSelector(
  selectLastMessage,
  lastMessage => lastMessage && lastMessage.timestamp
);

export const selectActiveConversationId = createSelector(
  conversationSelector,
  messages => messages.id
);

export const selectConversationist = state => state.messages.conversetionist;

const findUsername = (userId, users) => {
  const messageSender = users.find(user => user.id === userId);
  return messageSender.username;
};

export const addUsernamesToMessage = (state, messages) => {
  // I guess strange idea with this function, but i have no clue how to resolve this 
  // problem
  const { users } = state;
  messages.map(message => message.username = findUsername(message.userId, users));
};
