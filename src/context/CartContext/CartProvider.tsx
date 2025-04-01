import { useState } from "react";
import { Cart, CartContext } from "./CartContext";
import { Products } from "../../interface/Product.interface";

interface Params {
  children: React.ReactNode;
}

export const CartProvider = ({ children }: Params) => {
  const [cart, setCart] = useState<Cart[]>([]);

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

  const sendCartToWhatsapp = () => {
    const phoneNumber =  import.meta.env.VITE_PHONE_NUMBER;
  
    const totalPrice = `*Total*: $${cart
      .reduce((total, p) => {
        return (total += p.price * p.quantity);
      }, 0)
      .toFixed(2)}`;
    const cartString = cart.map((p) => `*- ${p.name}  x${p.quantity}*`).join("\n");
    const message = `Hola, quiero pedir:\n${cartString}\n\n${totalPrice}`;

    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        setCart,
        addProductToCart,
        removeFromCart,
        sendCartToWhatsapp,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
