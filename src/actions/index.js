export const USER_SELECTED = "USER_SELECTED";
export const ACCOUNT_SELECTED = "ACCOUNT_SELECTED";

export function selectUser(user) {
  return {
    type: USER_SELECTED,
    payload: user
  };
}

export function selectAccount(account) {
  console.log("fired", account);
  return {
    type: ACCOUNT_SELECTED,
    payload: account
  }
}
