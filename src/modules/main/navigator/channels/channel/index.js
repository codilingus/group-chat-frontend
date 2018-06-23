import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './style.css';
import { clearMessageBoard, fetchMessages } from '../../../../../state/messages';

<<<<<<< HEAD
export class Channel extends Component {
=======
export class Channel extends PureComponent {
>>>>>>> e4e43441855ba2ad17c64e3c3509e38a4dc6cc94

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
