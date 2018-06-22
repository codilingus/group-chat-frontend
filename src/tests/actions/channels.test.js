import {
  addNewChannel,
  addNewChannelSuccess,
  addNewChannelFailure
} from '../../state/channels';
import channels from '../fixtures/channels';

const ADD_NEW_CHANNEL = 'channels: add-new-channel';
const ADD_NEW_CHANNEL_SUCCESS = 'channels: add-new-channel-success';
const ADD_NEW_CHANNEL_FAILURE = 'channels: add-new-channel-failure';

test('should create add-new-channel action', () => {
  const action = addNewChannel();
  expect(action).toEqual({ type: ADD_NEW_CHANNEL })
});

test('should create add-new-channel-success action', () => {
  const action = addNewChannelSuccess(channels);
  expect(action).toEqual({
    type: ADD_NEW_CHANNEL_SUCCESS,
    payload: channels
  })
});

test('should create add-new-channel-failure action', () => {
  const action = addNewChannelFailure();
  expect(action).toEqual({ type: ADD_NEW_CHANNEL_FAILURE })
});
