export const fetchBackings = () => {
  return $.ajax({
      method: "GET",
      url: `api/backings`,
  });
};

export const createBacking = (backing) => {
  return $.ajax({
      method: "POST",
      url: `api/backings`,
      data: backing,
  });
};
