import { useDisplay, useProducts } from "../../hooks/index";
import { Card } from "../Card/Card";
import { OrderProduct } from "../OrderProduct/OrderProduct";

export const HomeProductsList = () => {
  const { display, toggleDisplay, settingProductOrder } = useDisplay();
  const { product, randomProducts } = useProducts();

  return (
    <section className="w-full  lg:w-[50%] grid py-4  gap-4 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]   lg:grid-cols-2  md:py-6 ">
      {randomProducts.map((product) => (
        <Card
          key={product.id}
          product={product}
          onClick={() => settingProductOrder(product)}
        />
      ))}
      {product && (
        <OrderProduct
          product={product}
          display={display}
          onClick={toggleDisplay}
        />
      )}
    </section>
  );
};
