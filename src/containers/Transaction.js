import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withdrawFunds } from '../actions/index';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class Transaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleWithdraw = (e) => {
    let amount = e.target.value;
    console.log(amount);
    if (amount) {
      this.props.withdrawFunds(amount)
    }
    this.toggle();
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>Withdraw Funds</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Make a Withdrawal</ModalHeader>
          <ModalBody>
            Please pick an amount to withdraw from your {this.props.account.accountType} account. Your current balance is: $ {this.props.account.balance}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" value={5.00} onClick={this.handleWithdraw}>$5</Button>{' '}
            <Button color="success" value={10.00} onClick={this.handleWithdraw}>$10</Button>{' '}
            <Button color="info" value={20.00} onClick={this.handleWithdraw}>$20</Button>{' '}
            <Button color="danger" onClick={this.handleWithdraw}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const userIdx = state.users.findIndex(user => user._id === state.selectedUser);
  const accountIdx = state.users[userIdx].accounts.findIndex(account => account.id === state.selectedAccount);
  return {
    account: state.users[userIdx].accounts[accountIdx],
    user: state.users[userIdx]
  };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        withdrawFunds: withdrawFunds
    }, dispatch)
}


export default connect(mapStateToProps,  mapDispatchToProps)(Transaction);
