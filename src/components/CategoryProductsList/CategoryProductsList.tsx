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
    <div className="w-full  lg:w-[50%] grid py-4  gap-4 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]   lg:grid-cols-2  md:py-6 ">
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
