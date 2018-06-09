import React, { Component } from 'react';
import FaPlus from 'react-icons/lib/fa/plus-circle';
import { connect } from 'react-redux';
import { fetchUsers } from '../../../../state/users';
import DirectMessage from './direct-message';
import './style.css';

const directMessages = ['Anna', 'Jan', 'Ola'];

class DirectMessages extends Component {

  handleAddDirectMessage = () => {

  };

  componentDidMount() {
    this.props.fetchUsers();
  };

  render() {
    const { users } = this.props;
    return (
      <div className='direct-messages-container'>
        <div className='direct-messages-header'>
          Direct Messages
          <FaPlus
            className='icon'
            onClick={this.handleAddDirectMessage} />
          {users.map((user, index) => (
            <DirectMessage
              key={index}
              name={user.name}
              id={user.id}
              email={user.email}
              username={user.username} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = {
  fetchUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(DirectMessages);
