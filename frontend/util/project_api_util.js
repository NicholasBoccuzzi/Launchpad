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
      data: {project: {category: category}}
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
      processData: false,
      contentType: false,
      data: project,
  });
};

export const updateProject = (project) => {
  return $.ajax({
      method: "PATCH",
      url: `api/projects/${project.id}`,
      data: { project }
  });
};

export const destroyProject = (project) => {
  return $.ajax({
      method: "DELETE",
      url: `api/projects/${project.id}`,
  });
};
