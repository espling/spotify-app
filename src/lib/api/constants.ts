export const getCategories =
  "https://api.spotify.com/v1/browse/categories?country=SE&offset=0&limit=1";
export const getCategory = (category_id: string) =>
  `https://api.spotify.com/v1/browse/categories/${category_id}`;
