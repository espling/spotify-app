import { Container } from "inversify";

import ApiClient from "#/lib/api/api.client";
import { ResolveTypes } from "#/lib/container/resolve.types";
import { ICategoriesServiceInterface } from "./interfaces/categories.service.interface";
import { CategoriesService } from "#/lib/services/categories.service";

const container = new Container();

container
  .bind<ApiClient>(ResolveTypes.ApiClient)
  .toConstantValue(new ApiClient());
container
  .bind<ICategoriesServiceInterface>(ResolveTypes.CategoriesService)
  .to(CategoriesService);

export { container };
