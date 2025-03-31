import { useState } from "react";
import { Cart, CartContext } from "./CartContext";
import { Products } from "../../interface/Product.interface";

interface Params {
  children: React.ReactNode;
}

export const CartProvider = ({ children }: Params) => {
  const [cart, setCart] = useState<Cart[]>([]);
  const [totalPorducts, setTotalProducts] = useState(0);

  const addProductToCart = (product: Products) => {
    //increment the product quantity if it already exists in the cart
    const newCart = [...cart];
    const productExists = newCart.find((p) => p.id === product.id);
    if (productExists) {
      newCart.map((p) => (p.id === product.id ? p.quantity++ : p));
      return setCart(newCart);
    }
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (product: Products) => {
    const newCart = [...cart];
    const productExists = newCart.find((p) => p.id === product.id);

    if (productExists && productExists.quantity === 1) {
      return setCart(newCart.filter((p) => p.id !== product.id));
    }

    if (productExists) {
      newCart.map((p) => (p.id === product.id ? (p.quantity -= 1) : p));
      return setCart(newCart);
    }
  };

  const settingCart = () => {
    const newCart = [...cart];
    const total = newCart.reduce((total, p) => {
      return (total += p.quantity);
    }, 0);
    setTotalProducts(total);
  };

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        setCart,
        addProductToCart,
        removeFromCart,
        settingCart,
        totalPorducts,
        setTotalProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
