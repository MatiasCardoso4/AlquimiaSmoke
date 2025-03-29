import { useCart } from "../../hooks/useCart";
import { Products } from "../../interface/Product.interface";
import { Button } from "../Button/Button";

interface Params {
  product: Products;
  display: boolean;
  onClick: () => void;
}

export const OrderProduct = ({ product, display, onClick }: Params) => {
  const { addToCart, removeFromCart, cart } = useCart();
  const productIsInCart = cart.find((p) => p.id === product.id);
  return (
    <section
      className={`${
        display ? "fixed" : "hidden"
      }  w-full h-screen lg:top-[33%] lg:left-[33%] lg:w-[33%] lg:h-[55%] rounded-md shadow-2xl  inset-0 z-50 bg-zinc-100 p-2 `}
    >
      <button
        onClick={onClick}
        className="font-bold bg-zinc-200 h-[30px] w-[30px] rounded-full"
      >
        X
      </button>
      <div className="flex flex-col items-center gap-4 ">
        <img className="w-[230px]" src={product.image} alt={product.name} />
        <div className="shadow-xl w-full p-4">
          <h3 className=" font-bold tracking-wider">{product.name}</h3>
          <p>{product.name}</p>
          <span>{product.price}</span>
        </div>
        <div className="w-full flex items-center justify-between p-2 border border-zinc-300 rounded-md">
          <span className="text-xl">Unidadades</span>
          <div className="w-[100px] bg-zinc-200  flex justify-between items-center p-2 rounded-2xl ">
            <Button label="+" onClick={() => addToCart(product)} />
            <span>{productIsInCart?.quantity || 0}</span>
            <Button label="-" onClick={() => removeFromCart(product)} />
          </div>
        </div>
        <div className="bg-red-500 text-center  w-[300px] rounded-2xl p-2 text-zinc-50 absolute bottom-[20px] cursor-pointer hover:bg-red-300">
          <Button
            label="Agrega a mi pedido"
          />
        </div>
      </div>
    </section>
  );
};
