import {
  addNewUser,
  addNewUserSuccess,
  addNewUserFailure
} from '../../state/current-user';

const ADD_NEW_USER = 'current-user: add-new-user';

test('should set up add-new-user action', () => {
  const action = addNewUser({
    name: 'Ada',
    password: '123',
    username: 'adka',
    mail: 'ada@gmail.com'
  });
  expect(action).toEqual({
    type: ADD_NEW_USER,
    payload: {
      name: 'Ada',
      password: '123',
      username: 'adka',
      mail: 'ada@gmail.com'
    }
  });
});
