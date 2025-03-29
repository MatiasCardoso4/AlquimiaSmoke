import { useState } from "react";
import { Cart, CartContext } from "./CartContext";
import { Products } from "../../interface/Product.interface";

interface Params {
  children: React.ReactNode;
}

export const CartProvider = ({ children }: Params) => {
  const [cart, setCart] = useState<Cart[]>([]);

  const addToCart = (product: Products) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    console.log('Product added');
    console.log(cart);
    
  };

  const removeFromCart = (product: Products) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (!existingItem) return prevCart;
      
      if (existingItem.quantity > 1) {
        // Si hay más de 1, disminuimos la cantidad
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        // Si solo queda 1, lo eliminamos del carrito
        return prevCart.filter(item => item.id !== product.id);
      }
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart: cart, setCart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
