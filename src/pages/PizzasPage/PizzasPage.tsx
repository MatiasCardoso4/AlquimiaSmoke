import { Header, CategoryCardContainer, Title } from "../../components/index";
import { CategoryProductsList } from "../../components/CategoryProductsList/CategoryProductsList";

export const PizzasPage = () => {
  return (
    <>
      <Header />
      <CategoryCardContainer />
      <Title title="Nuestras Pizzas" />
      <CategoryProductsList category="Pizzas" />
    </>
  );
};
