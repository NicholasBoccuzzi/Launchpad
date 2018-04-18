import merge from 'lodash/merge';

const backingReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {

    default:
      return state;
  }
};

export default backingReducer;
