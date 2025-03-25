import { CategoryCard } from "../Category/CategoryCard";
import {hamburgerCategoryImage,pizzaCategoryImage} from '../../../public/images/index'
export const CategoryCardContainer = () => {

  return (
    <div className="w-full flex  md:flex-nowrap justify-center gap-4 md:gap-12 text-center   p-4">
      <CategoryCard
        label="Pizzas"
        image={pizzaCategoryImage}
        path="/AlquimiaSmoke/Pizzas"
      />
      <CategoryCard
        label="Hamburguesas"
        image={hamburgerCategoryImage}
        path="/AlquimiaSmoke/Hamburguesas"
      />
    </div>
  );
};
