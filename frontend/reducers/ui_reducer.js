import { TOGGLE_PROFILE_DROPDOWN } from '../actions/ui_actions.js';
import { merge } from 'lodash';

const initialState = {
  profileDropDownActive: false
};

export default (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
  case TOGGLE_PROFILE_DROPDOWN:
    let newState = merge({}, state);
    newState.profileDropDownActive = !newState.profileDropDownActive;
    return newState;
  default:
    return state;
  }
};
