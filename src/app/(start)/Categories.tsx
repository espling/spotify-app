import { SpotifyCategoriesResponse, Category } from "@/src/types/spotify.types";

export const Categories = ({ categories }: SpotifyCategoriesResponse) => {
  return (
    <div>
      <ul>
        {categories.map((item: Category) => {
          return <li key={item.href}>{item.href}</li>;
        })}
      </ul>
    </div>
  );
};
