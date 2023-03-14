export interface SpotifyCategoriesResponse {
  categories: Categories;
}

export interface SpotifyCategoryResponse {
  category: Category;
}

export interface Categories {
  items: Category[];
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}

export interface Category {
  href: string;
  icons: Icon[];
  id: string;
  name: string;
}

export interface Icon {
  url: string;
  height: number;
  width: number;
}
