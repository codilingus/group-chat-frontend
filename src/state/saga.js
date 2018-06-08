import currentUserSaga from './current-user/saga';
import channelsSaga from './channels/saga';

export default function* () {
  yield* currentUserSaga();
  yield* channelsSaga();
}
