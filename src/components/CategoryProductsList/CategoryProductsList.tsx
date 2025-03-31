import { useDisplay, useProducts } from "../../hooks";
import { Card } from "../Card/Card";
import data from "../../data/data.json";
import { OrderProduct } from "../OrderProduct/OrderProduct";

interface Params {
  category: string;
}

export const CategoryProductsList = ({ category }: Params) => {
  const { settingProductOrder, display, toggleDisplay } = useDisplay();
  const { product } = useProducts();
  return (
    <div className="w-full  grid p-2  gap-4 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(400px,1fr))]  lg:w-[70%] lg:pb-8 ">
      {data.map((product) =>
        product.category === `${category}` ? (
          <Card
            key={product.id}
            product={product}
            onClick={() => settingProductOrder(product)}
          />
        ) : (
          ""
        )
      )}
      {product && (
        <OrderProduct
          product={product}
          display={display}
          onClick={toggleDisplay}
        />
      )}
    </div>
  );
};
