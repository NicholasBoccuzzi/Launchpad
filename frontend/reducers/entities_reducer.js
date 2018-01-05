import { combineReducers } from 'redux';
import projects from './project_reducer.js';

const entities = combineReducers({
  projects: projects
});

export default entities;
