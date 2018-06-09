import currentUserSaga from './current-user/saga';
import channelsSaga from './channels/saga';
import userSaga from './users/saga';
import messagesSaga from './messages/saga';

export default function* () {
  yield* currentUserSaga();
  yield* channelsSaga();
  yield* userSaga();
  yield* messagesSaga();
}
