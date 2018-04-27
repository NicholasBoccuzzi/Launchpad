export const fetchProjects = () => {
  return $.ajax({
      method: "GET",
      url: `api/projects`,
  });
};

export const fetchProjectBySearch = (search) => {
  return $.ajax({
      method: "GET",
      url: `api/projects`,
      data: {search: search}
  });
};

export const fetchCurrentUserProjects = (id) => {
  return $.ajax({
      method: "GET",
      url: `api/projects`,
      data: {creator_id: id}
  });
};

export const fetchUserProjects = (id) => {
  return $.ajax({
      method: "GET",
      url: `api/projects`,
      data: {creator_id: id}
  });
};

export const fetchBackedProjects = (id) => {
  return $.ajax({
      method: "GET",
      url: `api/projects`,
      data: {creator_id: id, backed: true}
  });
};

export const fetchProject = (id) => {
  return $.ajax({
      method: "GET",
      url: `api/projects/${id}`
  });
};

export const createProject = (project) => {
  return $.ajax({
      method: "POST",
      url: `api/projects`,
      data: project,
  });
};

export const updateProject = (project, id) => {
  if (project.project.additional_funds) {
    return $.ajax({
      method: "PATCH",
      url: `api/projects/${id}`,
      data: project
    });
  } else {
    return $.ajax({
      method: "PATCH",
      url: `api/projects/${id}`,
      processData: false,
      contentType: false,
      data: project
    });
  }
};

export const destroyProject = (project) => {
  return $.ajax({
      method: "DELETE",
      url: `api/projects/${project.id}`,
  });
};
