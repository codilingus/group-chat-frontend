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
  const { payload: name } = action;
  try {
    const response = yield call(channelApi.addNewChannel, name);
    yield put(addNewChannelSuccess(response));
  } catch (error) {

  }
}
