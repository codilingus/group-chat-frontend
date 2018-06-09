import { takeLatest, call, put } from 'redux-saga/effects';
import { LOGOUT, logOutSuccess, logOutFailure} from './index';
import { logOutUser } from '../../api/logout';
import { push } from 'react-router-redux';

export default function* () {
  yield takeLatest(LOGOUT, onLogOut)
}

function* onLogOut(action) {
  const { payload } = action;
  try {
    yield call(loginUser, payload);
    yield put(push('/'));
    yield put(logOutSuccess());
  } catch (error) {
    yield put(logOutFailure());
  }
}