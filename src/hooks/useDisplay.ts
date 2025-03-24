import { useState } from "react";
import { Products } from "../interface/Product.interface";
import { useProducts } from "./useProducts";

export const useDisplay = () => {
  const [display, setDisplay] = useState(false);
  const { setProduct } = useProducts();

  const toggleDisplay = () => {
    setDisplay(!display);
  };

  const settingProductOrder = (product: Products) => {
    setProduct(product);
    toggleDisplay();
  };

  return {
    display: display,
    toggleDisplay: toggleDisplay,
    setDisplay,
    settingProductOrder,
  };
};
