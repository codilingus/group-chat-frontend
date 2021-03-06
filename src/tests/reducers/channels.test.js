import { channelsReducer } from '../../state/channels';
import channels from '../fixtures/channels';

const ADD_NEW_CHANNEL_SUCCESS = 'channels: add-new-channel-success';

test('should setup default channels values', () => {
  const state = channelsReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should add new channel', () => {
  const newChannel = {
    name: 'general',
    id: 3
  };
  const action = {
    type: ADD_NEW_CHANNEL_SUCCESS,
    payload: newChannel
  };
  const state = channelsReducer(channels, action);
  //expect(state).toEqual([...channels, action.payload]);
});
