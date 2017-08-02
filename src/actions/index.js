export const USER_SELECTED = "USER_SELECTED";
export const ACCOUNT_SELECTED = "ACCOUNT_SELECTED";
export const WITHDRAW_FUNDS = "WITHDRAW_FUNDS";

export function selectUser(user) {
  return {
    type: USER_SELECTED,
    payload: user
  };
}

export function selectAccount(account) {
  return {
    type: ACCOUNT_SELECTED,
    payload: account
  }
}

export function withdrawFunds(account, amount) {
  return {
    type: WITHDRAW_FUNDS,
    account,
    amount
  }
}
