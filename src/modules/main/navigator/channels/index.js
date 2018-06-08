import React, { Component } from 'react';
import FaPlus from 'react-icons/lib/fa/plus-circle';
import { connect } from 'react-redux';
import { addNewChannel } from '../../../../state/channels';
import Channel from './channel';
import './style.css';

class Channels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beingCreated: false,
      newChannelName: ''
    }
  };

  handleAddingChannel = () => {
    this.setState({
      isChannelCreated: true
    });
  };

  handleNewChannelName = (event) => {
    const newChannelName = event.target.value;
    this.setState({
      newChannelName
    })
  };

  handleAddNewChannel = () => {
    const { newChannelName } = this.state;
    this.props.onAddNewChannel(newChannelName);
    this.setState({
      isChannelCreated: false,
      newChannelName: ''
    });
  };

  render() {
    const { beingCreated, newChannelName } = this.state;
    const { channels } = this.props;
    return (
      <div className='channels-container'>
        {!beingCreated && (
          <div className='channels-header'>
            Channels
          <FaPlus className='icon'
              onClick={this.handleAddingChannel} />
          </div>)}
        {beingCreated && (
          <div className='channel__adding-channel'>
            <input className='channel-input__adding-new-channel'
              placeholder='Channel name'
              value={newChannelName}
              onChange={this.handleNewChannelName} />
            <FaPlus className='icon'
              onClick={this.handleAddNewChannel} />
          </div>
        )}
        {channels.map((channel, index) =>
          (<Channel
            key={index}
            name={channel.name} />)
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  channels: state.channels
});

const mapDispatchToProps = {
  onAddNewChannel: addNewChannel
};

export default connect(mapStateToProps, mapDispatchToProps)(Channels);
