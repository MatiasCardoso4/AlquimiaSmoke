import { CategoryCard } from "../Category/CategoryCard";

export const CategoryCardContainer = () => {

  return (
    <div className="w-full flex  md:flex-nowrap justify-center gap-4 md:gap-12 text-center   p-4">
      <CategoryCard
        label="Pizzas"
        image="../../../public/pizza-option.png"
        path="/pizzas"
      />
      <CategoryCard
        label="Hamburguesas"
        image="../../../public/hamburguesa-option.png"
        path="/hamburguesas"
      />
    </div>
  );
};
