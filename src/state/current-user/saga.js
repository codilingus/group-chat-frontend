import { takeEvery, call, put } from 'redux-saga/effects';
import { ADD_NEW_USER, addNewUserSuccess, addNewUserFailure } from './index';
import { registerUser } from '../../api/registration';

export default function* () {
  yield takeEvery(ADD_NEW_USER, onAddingNewUser);
};

function* onAddingNewUser(action) {
  const { payload } = action;
  try {
    yield call(registerUser, payload.name, payload.surname,
      payload.username, payload.password, payload.email);
    yield put(addNewUserSuccess());
  } catch (error) {
    yield put(addNewUserFailure());
  }
}
