import currentUserSaga from './current-user/saga';
import channelsSaga from './channels/saga';
import loginSaga from './login/saga';

export default function* () {
  yield* currentUserSaga();
  yield* channelsSaga();
  yield* loginSaga();
}
