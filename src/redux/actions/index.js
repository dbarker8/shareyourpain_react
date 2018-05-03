export const UPDATE_LOGGED_IN_USER = 'users:updateLoggedInUser';
export const SUICIDE_MODAL = 'suicideModal';

export function updateLoggedInUser(newUser){
  return {
    type: UPDATE_LOGGED_IN_USER,
    payload: newUser
  }
}

export function updateSuicideModal(value) {
  return {
    type: SUICIDE_MODAL,
    payload: value
  }
}