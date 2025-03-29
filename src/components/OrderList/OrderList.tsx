import lupa from "../../../public/images/lupa.png";
import { useCart } from "../../hooks/useCart";
import { Button } from "../Button/Button";

interface Params {
  displayName: boolean;
  onClick: () => void;
}

export const OrderList = ({ displayName, onClick }: Params) => {
  const { cart, addToCart, removeFromCart } = useCart();
  return (
    <div
      className={` ${
        displayName ? "absolute" : "hidden"
      } w-[23%] h-screen right-0  top-[30%]`}
    >
      <div className="h-auto flex flex-col gap-4 bg-zinc-100 p-4 rounded-md shadow-xl">
        <div className="flex w-full justify-between ">
          <h3 className="text-zinc-800 text-xl ">Tu Pedido</h3>
          <button className="font-bold" onClick={onClick}>
            X
          </button>
        </div>
        <span className="w-full flex justify-center">
          <ul className="w-full flex flex-col  gap-4">
            {cart.length > 0 ? (
              cart.map((p) => (
                <li
                  key={p.id}
                  className="w-full flex flex-col items-center justify-center  border-0 border-b-2 border-zinc-800 pb-4"
                >
                  <div className="flex gap-2 mb-2">
                    <h3 className="text-xl">{p?.name} </h3>
                    <span className="font-bold self-center text-xl">
                      {" "}
                      {`x ${p.quantity}`}
                    </span>
                  </div>
                  <img src={p.image} alt={p.name} className="w-[100px]" />
                  <div className="w-full flex justify-center gap-2 items-center p-2 rounded-2xl ">
                    <div onClick={() => addToCart(p)}  className=" bg-zinc-200 w-[50px] h-[50px] rounded-[50%] flex justify-center items-center cursor-pointer">
                      <Button label="+" />
                    </div>
                    <div  onClick={() => removeFromCart(p)}  className=" bg-zinc-200 w-[50px] h-[50px] rounded-[50%] flex justify-center items-center cursor-pointer">
                      <Button label="-"/>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <img src={lupa} alt="" />
            )}
          </ul>
        </span>
      </div>
    </div>
  );
};
