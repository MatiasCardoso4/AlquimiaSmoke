import { createContext } from "react";
import { Products } from "../../interface/Product.interface";

export interface Cart {
  id: number,
  name: string,
  price: number,
  image: string,
  quantity: number
}

interface CartContextProps {
  cart: Cart[];
  setCart: React.Dispatch<React.SetStateAction<Cart[]>>;
  addToCart: (product: Products) => void;
  removeFromCart: (product: Products) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextProps>({
  cart: [],
  setCart: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});
