import { useCart } from "../../hooks/useCart";
import { Products } from "../../interface/Product.interface";
import { Button } from "../Button/Button";

interface Params {
  product: Products;
  display: boolean;
  onClick: () => void;
}

export const OrderProduct = ({ product, display, onClick }: Params) => {
  const { addProductToCart, removeFromCart, cart } = useCart();

  const productIsInCart = cart.find((p) => p.id === product.id);
  return (
    <section
      className={`${
        display ? "fixed" : "hidden"
      }  w-full h-screen lg:top-[33%] lg:left-[33%] lg:w-[33%] lg:h-[55%] rounded-md shadow-2xl  inset-0 z-50 bg-zinc-100 p-2 border border-zinc-300`}
    >
      <button
        onClick={onClick}
        className="font-bold bg-zinc-200 h-[30px] w-[30px] rounded-full"
      >
        X
      </button>
      <div className="flex flex-col items-center gap-4  shadow-zinc-300 shadow-2xl mt-2">
        <img className="w-[230px] border border-zinc-300 rounded-md" src={product.image} alt={product.name} />
        <div className=" w-full p-4 border border-zinc-300 rounded-md">
          <h3 className=" font-bold tracking-wider">{product.name}</h3>
          <p>{product.name}</p>
          <span>{product.price.toFixed(2)}</span>
        </div>
        <div className="w-[97%] flex items-center justify-between p-2 border border-zinc-300 rounded-md absolute bottom-5">
          <span className="text-xl">Unidadades</span>
          <div className="w-[100px] bg-zinc-200  flex justify-between items-center  rounded-2xl ">
            <div className="w-[50px] h-[50px] text-xl flex justify-center items-center cursor-pointer" onClick={() => addProductToCart(product)}>
              <Button label="+" />
            </div>
            <span className="font-bold">{productIsInCart?.quantity || 0}</span>
            <div className="w-[50px] h-[50px] text-xl flex justify-center items-center cursor-pointer" onClick={() => removeFromCart(product)}>
              <Button label="-" />
            </div>
          </div>
        </div>
      
      </div>
    </section>
  );
};
