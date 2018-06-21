import { currentUserReducer } from '../../state/current-user';
import { currentUser } from '../fixtures/current-user';

const ADD_NEW_USER_SUCCESS = 'current-user: add-new-user-success';

test('should setup default current-user values', () => {
  const state = currentUserReducer(undefined, { type: '@@INIT' });
  expect(state.isActive).toBe(false);
});

test('should setup current-user status isActive as true', () => {
  const action = {
    type: ADD_NEW_USER_SUCCESS
  }
  const state = currentUserReducer(currentUser, action);
  expect(state.isActive).toBe(true);
});
