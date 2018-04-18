import { combineReducers } from 'redux';
import projects from './project_reducer.js';
import users from './users_reducer.js';
import rewards from './reward_reducer.js';
import backings from './backing_reducer.js';

const entities = combineReducers({
  projects: projects,
  backings: backings,
  rewards: rewards,
  users: users
});

export default entities;
