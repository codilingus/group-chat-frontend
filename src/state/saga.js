import currentUserSaga from './current-user/saga';
import channelsSaga from './channels/saga';
import logSaga from './log/saga';

export default function* () {
  yield* currentUserSaga();
  yield* channelsSaga();
  yield* userSaga();
  yield* messagesSaga();
  yield* logSaga();
}
