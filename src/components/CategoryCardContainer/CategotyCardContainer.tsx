import { CategoryCard } from "../Category/CategoryCard";
export const CategoryCardContainer = () => {

  return (
    <div className="w-full flex  md:flex-nowrap justify-center gap-4 md:gap-12 text-center p-4">
      <CategoryCard
        label="Pizzas"
        image='https://matiascardoso4.github.io/AlquimiaSmoke/images/pizza-category.png'
        path="/AlquimiaSmoke/Pizzas"
      />
      <CategoryCard
        label="Hamburguesas"
        image='https://matiascardoso4.github.io/AlquimiaSmoke/images/hamburger-category.png'
        path="/AlquimiaSmoke/Hamburguesas"
      />
    </div>
  );
};
