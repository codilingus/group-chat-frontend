import sagaReducer from './current-user/saga';

export default function* () {
  yield* sagaReducer();
}
