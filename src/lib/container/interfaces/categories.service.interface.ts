import {
  SpotifyCategoriesResponse,
  SpotifyCategoryResponse,
} from "@/src/types/spotify.types";

export interface ICategoriesServiceInterface {
  getCategories(token: string): Promise<SpotifyCategoriesResponse>;
  getCategory(token: string, id: string): Promise<SpotifyCategoryResponse>;
}
