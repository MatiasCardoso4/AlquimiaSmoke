import { Link } from "react-router-dom";
import { Products } from "../../interface/Product.interface";

interface Params {
  label: string;
  image: string;
  path:string;
  onClick?: (product: Products) => void;
}
export const CategoryCard = ({ label, image,path }: Params) => {
  return (
    <Link to={path}>
      <div className="w-[120px] md:w-[250px] lg:w-[400px]  flex flex-col  items-center text-slate-800 bg-zinc-200 rounded-md cursor-pointer py-2">
        <img src={image} alt="image" className="w-[250px]" />
        <p className="text-[14px] md:text-[22px] font-semibold md:tracking-widest font-[Lobster,sans-serif]">
          {label}
        </p>
      </div>
    </Link>
  );
};
