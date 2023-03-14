export const getCategories = () => {
  return fetch("api/spotify/browse/categories")
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};
