import { combineReducers } from 'redux';
import { USER_SELECTED, ACCOUNT_SELECTED, WITHDRAW_FUNDS } from '../actions/index';
import userList from '../data/users';

const selectedUser = ( state = null, action) => {
  switch(action.type) {
    case USER_SELECTED:
    return action.payload
  }
  return state;
}

const selectedAccount = ( state = null, action ) => {
  switch(action.type) {
    case ACCOUNT_SELECTED:
    return action.payload
  }
  return state;
}

const withdrawMoney = (state = null, action ) => {
  switch(action.type) {
    case WITHDRAW_FUNDS:
    return (action.account.balance - action.amount)
  }
  return state;
}

const rootReducer = combineReducers({
  users: userList,
  selectedUser: selectedUser,
  selectedAccount: selectedAccount,
  withdrawMoney: withdrawMoney
});

export default rootReducer;
