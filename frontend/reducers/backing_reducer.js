import merge from 'lodash/merge';
import { RECEIVE_BACKING } from '../actions/backing_actions';

const backingReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BACKING:
      return merge({}, state, {[action.backing]: action.backing });
    default:
      return state;
  }
};

export default backingReducer;
