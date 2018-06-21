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
      isBeingCreated: false,
      newChannelName: ''
    }
  };

  handleAddingChannel = () => {
    this.setState({
<<<<<<< HEAD
      isBeingCreated: true
=======
      beingCreated: true
>>>>>>> b0963d9db41893607fa7bf77748dcbd645bf1860
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
<<<<<<< HEAD
      isBeingCreated: false,
=======
      beingCreated: false,
>>>>>>> b0963d9db41893607fa7bf77748dcbd645bf1860
      newChannelName: ''
    });
  };

  render() {
    const { isBeingCreated, newChannelName } = this.state;
    const { channels } = this.props;
    return (
      <div className='channels-container'>
        {!isBeingCreated && (
          <div className='channels-header'>
            Channels
          <FaPlus className='icon'
              onClick={this.handleAddingChannel} />
          </div>)}
        {isBeingCreated && (
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
