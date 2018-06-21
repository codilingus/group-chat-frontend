import { takeLatest, call, put } from 'redux-saga/effects';
import { LOGIN, logInSuccess, logInFailure} from './index';
import { loginUser } from '../../api/login';
import { push } from 'react-router-redux';

export default function* () {
  yield takeLatest(LOGIN, onLogin);
}

function* onLogin(action) {
  const { payload } = action;
  try {
    yield call(loginUser, payload);
    yield put(push('/me'));
    yield put(logInSuccess());
  } catch (error) {
    yield put(logInFailure());
  }
}
