import { createContext } from "react";
import { Products } from "../../interface/Product.interface";

interface ProductContextType {
  randomProducts: Products[];
  product: Products | null;
  setProduct:React.Dispatch<React.SetStateAction<Products | null>>;
}

export const ProductsContext = createContext<ProductContextType>({
  randomProducts: [] as Products[],
  product: {} as Products,
  setProduct: () => {},
});
