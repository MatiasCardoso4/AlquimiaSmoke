import { useCart } from "../../hooks/useCart";
import { useDisplay } from "../../hooks/useDisplay";
import { OrderList } from "../OrderList/OrderList";

export const CartHeaderTag = () => {
  const { display, toggleDisplay } = useDisplay();
  const { cart } = useCart();

  const totalPorducts = cart.reduce((total, p) => {
   return total += p.quantity
  },0)

  return (
    <>
      <span
        onClick={toggleDisplay}
        className="h-max text-md lg:text-xl cursor-pointer text-zinc-50 hover:text-orange-400 z-10"
      >
        🛒 Tu Pedido ({totalPorducts})
      </span>
      <OrderList displayName={display} onClick={toggleDisplay} />
    </>
  );
};
