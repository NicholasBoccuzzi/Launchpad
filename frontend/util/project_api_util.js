export const fetchProjects = (filters) => {
  return (
    $.ajax({
      method: "GET",
      url: `api/projects`,
      data: { filters }
    })
  );
};

export const fetchProject = (id) => {
  return (
    $.ajax({
      method: "GET",
      url: `api/projects/${id}`
    })
  );
};

export const createProject = (project) => {
  return (
    $.ajax({
      method: "POST",
      url: `api/projects`,
      data: { project }
    })
  );
};

export const updateProject = (project) => {
  return (
    $.ajax({
      method: "PATCH",
      url: `api/projects/${project.id}`,
      data: { project }
    })
  );
};

export const destroyProject = (project) => {
  return (
    $.ajax({
      method: "DELETE",
      url: `api/projects/${project.id}`,
    })
  );
};
