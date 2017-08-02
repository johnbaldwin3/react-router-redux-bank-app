import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectAccount }  from '../actions/index';
//make sure action created flows through all reducers
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

//import components
import Transaction from './Transaction';

class AccountDetail extends Component {

  render() {
    if(!this.props.account) {
      return (
        <div>Your Account Info Is Loading:</div>
      )
    }

    return (
      <div className="row">
        <div className="col-sm-6">
          <div className= "card">
            <div className= "card-block">
              <h4 className= "card-title">Account Information</h4>
              <h6 className= "card-subtitle mb-2 text-muted">{this.props.account.accountType} for {this.props.user.name}</h6>
              <div className= "card-text">
                <div>Balance: {this.props.account.balance}</div>
              </div>
              <Transaction>Withdraw Funds</Transaction>
              <Link className="btn btn-primary" to={`/users/${this.props.user._id}`} >Back to User Details</Link>
            </div>
          </div>
        </div>

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

export default connect(mapStateToProps)(AccountDetail);
