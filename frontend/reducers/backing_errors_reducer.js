import {
  RECEIVE_REWARD_ERRORS,
  CLEAR_REWARD_ERRORS
} from '../actions/session_actions';

const backingErrorsReducer = (state = [], action) => {

  switch (action.type) {
    case RECEIVE_REWARD_ERRORS:
      return action.errors;
    case CLEAR_REWARD_ERRORS:
      return state;
    default:
      return state;
  }
};

export default backingErrorsReducer;
