import currentUserSaga from './current-user/saga';
import channelsSaga from './channels/saga';
import userSaga from './users/saga';

export default function* () {
  yield* currentUserSaga();
  yield* channelsSaga();
  yield* userSaga();
}
