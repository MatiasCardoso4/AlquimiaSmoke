import { createContext } from "react";
import { Products } from "../../interface/Product.interface";

export interface Cart extends Products{
  id: number,
  name: string,
  price: number,
  image: string,
  quantity: number
}

interface CartContextProps {
  cart: Cart[];
  setCart: React.Dispatch<React.SetStateAction<Cart[]>>;
  addProductToCart: (product: Products) => void;
  removeFromCart: (product: Products) => void;
  sendCartToWhatsapp: () => void;
}

export const CartContext = createContext<CartContextProps>({
  cart: [],
  setCart: () => {},
  addProductToCart: () => {},
  removeFromCart: () => {},
  sendCartToWhatsapp: () => {},

});
