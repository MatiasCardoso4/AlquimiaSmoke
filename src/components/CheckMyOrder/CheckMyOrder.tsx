import { useDisplay } from "../../hooks/useDisplay";
import { OrderList } from "../OrderList/OrderList";

export const CheckMyOrder = () => {
  const { display, toggleDisplay } = useDisplay();

  return (
    <>
      <span
        onClick={toggleDisplay}
        className="h-max text-md lg:text-xl cursor-pointer text-zinc-50 hover:text-orange-400 z-10"
      >
        Ver Mi Pedido
      </span>
      <OrderList displayName={display} onClick={toggleDisplay} />
    </>
  );
};
