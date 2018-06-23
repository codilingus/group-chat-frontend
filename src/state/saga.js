import { fork } from 'redux-saga/effects';
import currentUserSaga from './current-user/saga';
import channelsSaga from './channels/saga';
<<<<<<< HEAD
import sessionUserSaga from './session-user/saga';
import userSaga from './users/saga';
import messagesSaga from './messages/saga';

=======
import userSaga from './users/saga';
import messagesSaga from './messages/saga';
import loginSaga from './login/saga';
>>>>>>> e4e43441855ba2ad17c64e3c3509e38a4dc6cc94

export default function* () {
  yield* currentUserSaga();
  yield* channelsSaga();
  yield* userSaga();
<<<<<<< HEAD
  yield fork(messagesSaga);
  yield* sessionUserSaga();
=======
  yield* messagesSaga();
  yield* loginSaga();
>>>>>>> e4e43441855ba2ad17c64e3c3509e38a4dc6cc94
}
