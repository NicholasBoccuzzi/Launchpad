import * as ProjectAPIUtil from '../util/project_api_util.js';

export const RECEIVE_ALL_PROJECTS = "RECEIVE_ALL_PROJECTS";
export const RECEIVE_CURRENT_USER_PROJECTS = "RECEIVE_CURRENT_USER_PROJECTS";
export const RECEIVE_USER_PROJECTS = "RECEIVE_USER_PROJECTS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const REMOVE_PROJECT = "REMOVE_PROJECT";
export const RECEIVE_PROJECT_ERRORS = "RECEIVE_PROJECT_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

export const receiveAllProjects = (projects) => {
  return {
    type: RECEIVE_ALL_PROJECTS,
    projects: projects
  };
};

export const receiveCurrentUserProjects = (projects) => {
  return {
    type: RECEIVE_CURRENT_USER_PROJECTS,
    currentUserProjects: projects
  };
};

export const receiveUserProjects = (projects) => {
  return {
    type: RECEIVE_USER_PROJECTS,
    userProjects: projects
  };
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

export const clearProjectErrors = () => ({
  type: CLEAR_SESSION_ERRORS,
});

export const fetchProjects = (category) => dispatch => {
  if (category) {
    return (
      ProjectAPIUtil.fetchProjectByCategory(category).then(projects => dispatch(receiveAllProjects(projects)),
    err => dispatch(receiveProjectErrors))
    );
  } else {
    return (
      ProjectAPIUtil.fetchProjects().then(projects => dispatch(receiveAllProjects(projects)),
      err => dispatch(receiveProjectErrors))
    );
  }
};

export const fetchCurrentUserProjects = (id) => dispatch => {
  return (
    ProjectAPIUtil.fetchCurrentUserProjects(id).then(currentUserProjects => dispatch(receiveCurrentUserProjects(currentUserProjects)),
    err => dispatch(receiveProjectErrors))
  );
};

export const fetchUserProjects = (id) => dispatch => {
  return (
    ProjectAPIUtil.fetchUserProjects(id).then(userProjects => dispatch(receiveUserProjects(userProjects)),
    err => dispatch(receiveProjectErrors))
  );
};

export const fetchProject = (id) => dispatch => {
  return (
    ProjectAPIUtil.fetchProject(id).then(project => dispatch(receiveProject(project)),
  err => dispatch(receiveProjectErrors))
  );
};

export const createProject = (project) => dispatch => {
  return (
    ProjectAPIUtil.createProject(project).then(project => dispatch(receiveProject(project)),
    err => dispatch(receiveProjectErrors)).then((project) => {
      let origin = window.location.origin + "/#/";
      let projectEdit = `projects/${project.project.id}/edit`;
      window.location.assign(origin + projectEdit);
    })
  );
};

export const updateProject = (project) => dispatch => {
  return (
    ProjectAPIUtil.updateProject(project).then(project => dispatch(receiveProject(project)),
  err => dispatch(receiveProjectErrors))
  );
};

export const deleteProject = (project) => dispatch => {
  return (
    ProjectAPIUtil.deleteProject(project).then(project => dispatch(receiveProject(project)),
  err => dispatch(receiveProjectErrors))
  );
};
