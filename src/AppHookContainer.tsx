import {App} from "./App";
import { AppRouter } from "./AppRouter";
import { ProductProvider } from "./context/ProductsContext/ProductProvider.tsx";
import { CartProvider } from "./context/CartContext/CartProvider.tsx";
export const AppHookContainer = () => {
  return (
    <CartProvider>
      <ProductProvider>
        <App>
          <AppRouter />
        </App>
      </ProductProvider>
    </CartProvider>
  );
};
