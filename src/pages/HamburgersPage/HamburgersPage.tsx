import { Header, CategoryCardContainer, Title } from "../../components/index";
import { CategoryProductsList } from "../../components/CategoryProductsList/CategoryProductsList";

export const HamburgersPage = () => {
  return (
    <>
      <Header />
      <CategoryCardContainer />
      <Title title="Nuestras hamburguesas" />
      <CategoryProductsList category="Hamburguesas" />
    </>
  );
};
