import { takeLatest, call, put } from 'redux-saga/effects';
import { 
  LOGIN, 
  logInSuccess, 
  logInFailure,
  LOGOUT, 
  logOutSuccess, 
  logOutFailure
} from './index';
import { logInUser } from '../../api/login';
import { logOutUser } from '../../api/logout';
import { push } from 'react-router-redux';

export default function* () {
  yield takeLatest(LOGIN, onLogin);
  yield takeLatest(LOGOUT, onLogOut);
}

function* onLogin(action) {
  const { payload } = action;
  try {
    const userDetails = yield call(logInUser, payload);
    yield put(push('/me'));
    yield put(logInSuccess(userDetails));
  } catch (error) {
    yield put(logInFailure());
  }
}

function* onLogOut() {
  try {
    yield call(logOutUser);
    yield put(push('/logout'));
    yield put(logOutSuccess());
  } catch (error) { console.log(error)
    yield put(logOutFailure());
  }
}
