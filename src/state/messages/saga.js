import { delay } from 'redux-saga';
import { takeEvery, call, put } from 'redux-saga/effects';
import {
  fetchMessagesSuccess,
  fetchMessagesFailure,
  FETCH_MESSAGES,
  FETCH_MESSAGES_SUCCESS
} from './index';
import * as messagesApi from '../../api/messages';

export default function* () {
  yield takeEvery(FETCH_MESSAGES, onFetchingMessages);
  yield takeEvery(FETCH_MESSAGES_SUCCESS, onFetchingNewMessages);
};

function* onFetchingMessages(action) {
  const { payload } = action;
  try {
    const messages = yield call(messagesApi.fetchMessages, payload);
    yield put(fetchMessagesSuccess(messages));
  } catch (error) {

  }
};

function* onFetchingNewMessages(action) {
  const { payload } = action;
  while (true) {
    const messages = yield call(messagesApi.fetchMessages, payload.name, payload.timestamp);
    yield put(fetchMessagesSuccess(messages));
    yield delay(1000);
  }
}
