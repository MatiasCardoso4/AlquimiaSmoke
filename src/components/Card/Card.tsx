import { Products } from "../../interface/Product.interface";

interface Params {
  product: Products;
  onClick: () => void;
}

export const Card = ({ product,onClick }: Params) => {
  return (

    <div
      onClick={onClick}
      className="h-[200px] w-full  flex  md:justify-center md:h-[300px]  lg:h-[250px]  lg:justify-between m-auto items-center shadow-lg rounded-md p-4 bg-zinc-50  text-zinc-800 cursor-pointer "
    >
      <div className="h-[100%] flex flex-col md:gap-2 justify-around">
        <h3 className="text-md md:text-xl lg:text-2xl font-bold tracking-wider font-[Lobster,sans-serif]">
          {product.name}
        </h3>
        <p className="text-sm  lg:w-[100%] lg:text-xl [2560px]:text-3xl">{product.description}</p>
        <span className="w-[100px] text-center p-1 text-sm md:text-xl rounded-2xl font-semibold bg-zinc-800 text-zinc-50">
          ${product.price.toFixed(2)}
        </span>
      </div>
      <img
        className=" object-cover w-[96px] h-[96px]"
        src={product.image}
        alt={product.name}
      />
    </div>
  );
};
