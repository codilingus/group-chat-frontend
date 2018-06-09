import { takeEvery, call, put } from 'redux-saga/effects';
import { fetchUsersSuccess, fetchUsersFailure, FETCH_USERS } from './index';
import * as usersApi from '../../api/users';

export default function*() {
  yield takeEvery(FETCH_USERS, onFetchingUsers);
}

function* onFetchingUsers(){
  try {
    const users = yield call(usersApi.fetchUsers);
    yield put(fetchUsersSuccess(users));
  } catch (error) {
    
  }
}
