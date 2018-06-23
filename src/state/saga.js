import { fork } from 'redux-saga/effects';
import currentUserSaga from './current-user/saga';
import channelsSaga from './channels/saga';
import userSaga from './users/saga';
import messagesSaga from './messages/saga';
import loginSaga from './login/saga';
import activeUsersSaga from './active-users/saga';

export default function* () {
  yield* currentUserSaga();
  yield* channelsSaga();
  yield* userSaga();
  yield fork(messagesSaga);
  yield* loginSaga();
  yield fork(activeUsersSaga);
}
