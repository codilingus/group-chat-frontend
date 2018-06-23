import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { startConversation } from '../../../../../state/messages';
import './style.css';
import { clearMessageBoard, fetchMessages } from '../../../../../state/messages';

export class Channel extends PureComponent {

  handleDirectToChannel = () => {
    const { id } = this.props;
    this.props.onStartConversation({ id });
  };

  render() {
    const { name } = this.props;
    return (
      <div className='channel-container'
        onClick={this.handleDirectToChannel}>
        # {name}
      </div>
    );
  }
};

const mapDispatchToProps = {
  onStartConversation: startConversation
};

export default connect(null, mapDispatchToProps)(Channel);
