export const fetchProjects = () => {
  return $.ajax({
      method: "GET",
      url: `api/projects`,
  });
};

export const fetchProjectByCategory = (category) => {
  return $.ajax({
      method: "GET",
      url: `api/projects`,
      data: {category: category}
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
  return $.ajax({
      method: "PATCH",
      url: `api/projects/${id}`,
      processData: false,
      contentType: false,
      data: project
  });
};

export const destroyProject = (project) => {
  return $.ajax({
      method: "DELETE",
      url: `api/projects/${project.id}`,
  });
};
