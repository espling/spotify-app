import { getSession } from "#/lib/auth/session";
import { redirect } from "next/navigation";
import { container } from "@/src/lib/container";
import { ICategoriesServiceInterface } from "#/lib/container/interfaces/categories.service.interface";
import { ResolveTypes } from "@/src/lib/container/resolve.types";

import styles from "./page.module.scss";
// import { Categories } from "./(start)/Categories";
import type { Categories } from "../types/spotify.types";

export default async function Home() {
  const session = await getSession();
  if (!session?.user) redirect("/login");

  const accessToken = session?.accessToken;

  const categoriesService = container.get<ICategoriesServiceInterface>(
    ResolveTypes.CategoriesService
  );

  const resp = await categoriesService.getCategories(accessToken!);
  // response1 .items.forEach((item: Categories) => {
  //   console.log(item);
  // });
  console.log("resp", resp);

  // const response2 = await categoriesService.getCategory(accessToken!, resp.items ?? '');
  // console.log(response2);

  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        {/* <Categories categories={response.categories ?? []} /> */}
      </div>
    </section>
  );
}
