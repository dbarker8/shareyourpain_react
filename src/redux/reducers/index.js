import { combineReducers } from 'redux';
import { UPDATE_LOGGED_IN_USER, SUICIDE_MODAL } from '../actions';

export function loggedInUserReducer(state = null, action) {
  switch (action.type) {
    case UPDATE_LOGGED_IN_USER:
      return action.payload;
    default: return state;
  }
}

export function suicideModalReducer(state = false, action) {
  switch (action.type) {
    case SUICIDE_MODAL:
      return action.payload;
    default: return state;
  }
}

export default combineReducers({
  loggedInUser: loggedInUserReducer,
  suicideModal: suicideModalReducer
})