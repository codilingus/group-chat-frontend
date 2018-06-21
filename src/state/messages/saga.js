import { delay } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { fetchMessagesSuccess, fetchMessagesFailure } from './index';
import * as messagesApi from '../../api/messages';
import {
  addUsernamesToMessage,
  selectLastMessageTimestamp,
  selectActiveConversationId
} from './selectors';

export default function* () {

  while (true) {
    yield delay(1000);
    const id = yield select(selectActiveConversationId);
    const timestamp = yield select(selectLastMessageTimestamp);
    const payload = {
      id,
      timestamp
    };
    try {
      const messages = yield call(messagesApi.fetchMessages, payload);
      const state = yield select();
      yield addUsernamesToMessage(state, messages);
      yield put(fetchMessagesSuccess({messages, state}));
    } catch (error) {
      yield put(fetchMessagesFailure(error));
    }
  }
}
