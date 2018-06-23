import { createSelector } from 'reselect';

export const selectActiveUsers = (state) => state.activeUsers;

export const selectUserStatus = (state, id) => {
  const users = selectActiveUsers(state);
  return users.includes(id);
};
