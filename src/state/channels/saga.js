import { takeEvery, call, put } from 'redux-saga/effects';
import {
  addNewChannelSuccess,
  addNewChannelFailure,
  ADD_NEW_CHANNEL
} from './index';
import * as channelApi from '../../api/channels';

export default function* () {
  yield takeEvery(ADD_NEW_CHANNEL, onAddingNewChannel)
}

function* onAddingNewChannel(action) {
  const { payload } = action;
  try {
    const response = yield call(channelApi.addNewChannel, payload);
    yield put(addNewChannelSuccess(response));
  } catch (error) {

  }
}
