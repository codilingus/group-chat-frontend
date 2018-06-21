import currentUserSaga from './current-user/saga';
import channelsSaga from './channels/saga';
<<<<<<< HEAD
import userSaga from './users/saga';
import messagesSaga from './messages/saga';
=======
import loginSaga from './login/saga';
>>>>>>> b0963d9db41893607fa7bf77748dcbd645bf1860

export default function* () {
  yield* currentUserSaga();
  yield* channelsSaga();
<<<<<<< HEAD
  yield* userSaga();
  yield* messagesSaga();
=======
  yield* loginSaga();
>>>>>>> b0963d9db41893607fa7bf77748dcbd645bf1860
}
