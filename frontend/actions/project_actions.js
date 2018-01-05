import * as ProjectAPIUtil from '../util/project_api_util.js';

export const RECEIVE_ALL_PROJECTS = "RECEIVE_ALL_PROJECTS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const REMOVE_PROJECT = "REMOVE_PROJECT";
export const RECEIVE_PROJECT_ERRORS = "RECEIVE_PROJECT_ERRORS";

export const receiveAllProjects = (projects) => {
  return ({
    type: RECEIVE_ALL_PROJECTS,
    projects
  });
};

export const receiveProject = (project) => {
  return ({
    type: RECEIVE_PROJECT,
    project
  });
};

export const removeProject = (project) => {
  return ({
    type: REMOVE_PROJECT,
    project
  });
};

export const receiveProjectErrors = errors => {
  return ({
    type: RECEIVE_PROJECT_ERRORS,
    errors
  });
};

export const fetchProjects = () => dispatch => {
  return (
    ProjectAPIUtil.fetchProjects().then(projects => receiveAllProjects(projects))
  );
};

export const fetchProject = (id) => dispatch => {
  return (
    ProjectAPIUtil.fetchProject(id).then(project => receiveProject(project))
  );
};

export const createProject = (project) => dispatch => {
  return (
    ProjectAPIUtil.createProject(project).then(project => receiveProject(project))
  );
};

export const updateProject = (project) => dispatch => {
  return (
    ProjectAPIUtil.updateProject(project).then(project => receiveProject(project))
  );
};

export const deleteProject = (project) => dispatch => {
  return (
    ProjectAPIUtil.deleteProject(project).then(project => receiveProject(project))
  );
};
