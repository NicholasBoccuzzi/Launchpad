import {
  RECEIVE_REWARD_ERRORS,
  CLEAR_REWARD_ERRORS
} from '../actions/reward_actions';

const projectErrorsReducer = (state = [], action) => {

  switch (action.type) {
    case RECEIVE_REWARD_ERRORS:
      return action.errors.responseJSON;
    case CLEAR_REWARD_ERRORS:
      return state;
    default:
      return state;
  }
};

export default projectErrorsReducer;
