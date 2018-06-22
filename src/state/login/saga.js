import { takeLatest, call, put } from 'redux-saga/effects';
import { LOGIN, logInSuccess, logInFailure} from './index';
import { loginUser } from '../../api/login';
import { push } from 'react-router-redux';

export default function* () {
  yield takeLatest(LOGIN, onLogin);
}

function* onLogin(action) {
  const { payload } = action;
  const username = payload.username;
  try {
    const userDetails = yield call(loginUser, payload);
    console.log(userDetails);
    yield put(push('/me'));
    yield put(logInSuccess(userDetails));
  } catch (error) {
    yield put(logInFailure());
  }
}
