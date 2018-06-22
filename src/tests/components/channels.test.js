import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import state from '../fixtures/root-reducer';
import ConnectedChannels, { Channels } from '../../modules/main/navigator/channels';

const ADD_NEW_CHANNEL = 'channels: add-new-channel';

describe('Should render Channels container', () => {
  const mockStore = configureStore();
  let store, wrapper, onAddNewChannel;

  beforeEach(() => {
    store = mockStore(state);
    store.dispatch = jest.fn();
    wrapper = shallow(
      <ConnectedChannels store={store} />)
  });

  test('should render Channels correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have props', () => {
    expect(wrapper.props())
      .toEqual(expect.objectContaining({
        channels: state.channels,
        onAddNewChannel: expect.any(Function)
      }));
  });

  it('maps onAddNewChannel to dispatch add-new-channel action', () => {
    wrapper.props().onAddNewChannel();
    expect(store.dispatch).toHaveBeenCalledWith({ type: ADD_NEW_CHANNEL });
  });

});
