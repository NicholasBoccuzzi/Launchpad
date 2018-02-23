import merge from 'lodash/merge';

import {
  RECEIVE_ALL_PROJECTS,
  RECEIVE_CURRENT_USER_PROJECTS,
  RECEIVE_PROJECT,
  REMOVE_PROJECT
} from '../actions/project_actions';


const projectsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_PROJECTS:
      return action.projects;
    case RECEIVE_CURRENT_USER_PROJECTS:
      return action.projects;
    case RECEIVE_PROJECT:
      return merge({}, state, {[action.project.id]: action.project });
    case REMOVE_PROJECT:
      let newState = merge({}, state);
      delete newState[action.project.id];
      return newState;
    default:
      return state;
  }
};

export default projectsReducer;
