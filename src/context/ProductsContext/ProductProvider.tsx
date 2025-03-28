import { ProductsContext } from "./ProductsContext";
import data from "../../data/data.json";
import { useEffect, useState } from "react";
import { Products } from "../../interface/Product.interface";


interface Params {
  children: React.ReactNode;
}

export const ProductProvider = ({ children }: Params) => {
  const [randomProducts, setRandomProducts] = useState<Products[]>([]);
  const [product, setProduct] = useState<Products | null>(null);


  useEffect(() => {
    const showRandomProducts = (quantity: number) => {
      const copiedData = [...data];

      const sortedProducts = copiedData.sort(() => Math.random() - 0.5);
      const sliceProducts = sortedProducts.slice(0, quantity);
      setRandomProducts(sliceProducts);
    };

    showRandomProducts(6);
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        product: product,
        ...product,
        setProduct,
        randomProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
