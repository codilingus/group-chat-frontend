import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './style.css';
import { clearMessageBoard, fetchMessages } from '../../../../../state/messages';

export class Channel extends PureComponent {

  handleDirectToChannel = () => {
    const { id } = this.props;
    this.props.onClearMessageBoard();
    this.props.onFetchingMessage({ id });
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
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
  onFetchingMessage: fetchMessages,
  onClearMessageBoard: clearMessageBoard
};

export default connect(mapStateToProps, mapDispatchToProps)(Channel);
