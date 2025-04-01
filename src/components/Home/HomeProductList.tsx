import { useDisplay, useProducts } from "../../hooks/index";
import { Card } from "../Card/Card";
import { OrderProduct } from "../OrderProduct/OrderProduct";

export const HomeProductsList = () => {
  const { display, toggleDisplay, settingProductOrder } = useDisplay();
  const { product, randomProducts } = useProducts();

  return (
    <section className="w-full  grid p-2  gap-6 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(400px,1fr))]  lg:w-[70%] lg:pb-8 ">
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
