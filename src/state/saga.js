import currentUserSaga from './current-user/saga';
import channelsSaga from './channels/saga';
import loginSaga from './log/saga';

export default function* () {
  yield* currentUserSaga();
  yield* channelsSaga();
  yield* loginSaga();
}
