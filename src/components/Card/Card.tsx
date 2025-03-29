import { Products } from "../../interface/Product.interface";

interface Params {
  product: Products;
  onClick: () => void;
}

export const Card = ({ product,onClick }: Params) => {
  return (

    <div
      onClick={onClick}
      className="h-[200px]  w-full  flex  m-auto items-center shadow-lg rounded-md p-4 bg-zinc-50  text-zinc-800 cursor-pointer"
    >
      <div className="h-[100%] flex flex-col justify-around">
        <h3 className="text-md md:text-xl font-bold tracking-wider font-[Lobster,sans-serif]">
          {product.name}
        </h3>
        <p className="text-sm">{product.description}</p>
        <span className=" text-sm md:text-xl rounded-2xl ">
          ${product.price.toFixed(2)}
        </span>
      </div>
      <img
        className="block object-cover align-middle  w-[96px] h-[96px]"
        src={product.image}
        alt={product.name}
      />
    </div>
  );
};
