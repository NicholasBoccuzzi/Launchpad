import { TOGGLE_CREATE_PROJECT_MODAL, TOGGLE_PROFILE_DROPDOWN, TOGGLE_ERROR_MODAL} from '../actions/ui_actions.js';
import { merge } from 'lodash';

const initialState = {
  profileDropDownActive: false,
  errorModalActive: false,
  createProjectModalActive: false,
};

export default (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
  case TOGGLE_PROFILE_DROPDOWN:
    let newState = merge({}, state);
    newState.profileDropDownActive = !newState.profileDropDownActive;
    return newState;
  case TOGGLE_ERROR_MODAL:
    let newErrorState = merge({}, state);
    newErrorState.errorModalActive = !newErrorState.errorModalActive;
    return newErrorState;
  case TOGGLE_CREATE_PROJECT_MODAL:
    let newProjectState = merge({}, state);
    newProjectState.createProjectModalActive = !newProjectState.createProjectModalActive;
    return newProjectState;

  default:
    return state;
  }
};
