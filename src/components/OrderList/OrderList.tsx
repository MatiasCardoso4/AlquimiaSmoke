import lupa from "../../../public/images/lupa.png";
import { useCart } from "../../hooks/useCart";
import { Button } from "../Button/Button";

interface Params {
  displayName: boolean;
  onClick: () => void;
}

export const OrderList = ({ displayName, onClick }: Params) => {
  const { cart, addProductToCart, removeFromCart,sendCartToWhatsapp } = useCart();
  return (
    <div
      className={` ${
        displayName ? "absolute" : "hidden"
      } w-full h-auto  right-0  top-0  lg:w-[30%] lg:top-[33%] lg:right-[2%] lg:h-max shadow-2xl z-10 `}
    >
      <div className="h-auto flex flex-col gap-4 bg-zinc-950 p-4 rounded-md ">
        <div className="flex w-full justify-between ">
          <h3 className="text-zinc-50 text-xl ">Tu Pedido</h3>
          <Button label="❌" onClick={onClick} />
        </div>
        <span className="w-full flex justify-center">
          <ul className="w-full flex flex-col  gap-4">
            {cart.length > 0 ? (
              cart.map((p) => (
                <li
                  key={p.id}
                  className="w-full flex flex-col items-center justify-center  border-0 border-b-2 border-zinc-50 pb-4"
                >
                  <div className="flex gap-2 mb-2">
                    <h3 className="text-xl text-zinc-50">{p?.name} </h3>
                    <span className="font-bold self-center text-xl text-zinc-50">
                      {" "}
                      {`x ${p.quantity}`}
                    </span>
                  </div>
                  <img src={p.image} alt={p.name} className="w-[100px]" />
                  <div className="w-full flex justify-center gap-2 items-center p-2 rounded-2xl ">
                    <div
                      onClick={() => addProductToCart(p)}
                      className=" bg-zinc-200 w-[50px] h-[50px] rounded-[50%] flex justify-center items-center cursor-pointer"
                    >
                      <Button label="+" />
                    </div>
                    <div
                      onClick={() => removeFromCart(p)}
                      className=" bg-zinc-200 w-[50px] h-[50px] rounded-[50%] flex justify-center items-center cursor-pointer"
                    >
                      <Button label="-" />
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <img src={lupa} alt="imagen de una lupa" className="w-[33%] m-auto"/>
            )}
          </ul>
        </span>
        <div>
          <span className="text-zinc-50 text-2xl">{`Total: ${cart
            .reduce((total, p) => {
              return (total += p.quantity * p.price);
            }, 0)
            .toFixed(2)}`}</span>
        </div>
        <div className="bg-green-400 p-2 rounded-xl text-center hover:bg-green-300 cursor-pointer" onClick={() => cart.length > 0 && sendCartToWhatsapp()}>
          <Button label="Envianos tu pedido a Whatsapp" />
        </div>
      </div>
    </div>
  );
};
