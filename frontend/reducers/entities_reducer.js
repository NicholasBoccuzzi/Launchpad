import { combineReducers } from 'redux';
import projects from './project_reducer.js';
import users from './users_reducer.js';
import rewards from './reward_reducer.js';

const entities = combineReducers({
  projects: projects,
  users: users
});

export default entities;
