import { takeLatest, call, put } from 'redux-saga/effects';
import { LOGIN, logInSuccess, logInFailure} from './index';
import { loginUser } from '../../api/login';

export default function* () {
  yield takeLatest(LOGIN, onLogin)
}

function* onLogin(action) {
  const { payload } = action;
  console.log(payload);
  try {
    yield call(loginUser, payload);
    yield put(logInSuccess());
  } catch (error) {
    yield put(logInFailure());
  }
}
