import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ProductProvider } from "./context/ProductsContext/ProductProvider.tsx";
import { CartProvider } from "./context/CartContext/CartProvider.tsx";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </CartProvider>
  </StrictMode>
);
