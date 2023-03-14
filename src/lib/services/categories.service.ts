import { injectable, inject } from "inversify";

import type { IApiClient } from "#/lib/api/api.client";
import { ResolveTypes } from "#/lib/container/resolve.types";
import { ICategoriesServiceInterface } from "#/lib/container/interfaces/categories.service.interface";
import { getCategories, getCategory } from "#/lib/api/constants";
import {
  SpotifyCategoriesResponse,
  SpotifyCategoryResponse,
} from "@/src/types/spotify.types";

@injectable()
export class CategoriesService implements ICategoriesServiceInterface {
  constructor(@inject(ResolveTypes.ApiClient) private apiClient: IApiClient) {}

  getCategories(accessToken: string): Promise<SpotifyCategoriesResponse> {
    this.apiClient;
    return this.apiClient.get(getCategories, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }
  getCategory(
    accessToken: string,
    id: string
  ): Promise<SpotifyCategoryResponse> {
    this.apiClient;
    return this.apiClient.get(getCategory(id), {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }
}
