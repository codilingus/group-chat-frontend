import { takeEvery, call, put } from 'redux-saga/effects';
import {
  fetchMessagesSuccess,
  fetchMessagesFailure,
  FETCH_MESSAGES
} from './index';

export default function* () {
  yield takeEvery(FETCH_MESSAGES, onFetchingMessages);
}

function* onFetchingMessages(action) {
  
}
