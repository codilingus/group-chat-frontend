import sagaReducer from './current-user/saga';
import loginSaga from './login/saga';

export default function* () {
  yield* sagaReducer();
  yield* loginSaga();
}
