import { delay } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import {
  fetchActiveUsersSuccess,
  fetchActiveUsersFailure
} from './index';
import * as usersApi from '../../api/users';

export default function* () {
  while (true) {
    yield delay(5000);
    const activeUsers = yield call(usersApi.fetchActiveUsers);
    try {
      yield put(fetchActiveUsersSuccess({ activeUsers }));
    } catch (error) {
      yield put(fetchActiveUsersFailure());
    }
  }
};
