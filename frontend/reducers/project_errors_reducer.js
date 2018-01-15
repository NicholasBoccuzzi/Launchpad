import {
  RECEIVE_PROJECT_ERRORS,
  CLEAR_PROJECT_ERRORS
} from '../actions/session_actions';

const projectErrorsReducer = (state = [], action) => {

  switch (action.type) {
    case RECEIVE_PROJECT_ERRORS:
      return action.errors;
    case CLEAR_PROJECT_ERRORS:
      return state;
    default:
      return state;
  }
};

export default projectErrorsReducer;
