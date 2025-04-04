import { Link } from "react-router-dom";
import { CheckMyOrder } from "../CheckMyOrder/CheckMyOrder";
import logo from '../../../public/images/logo.png';

export const Header = () => {
  return (
    <header className=" flex w-full justify-between items-center p-2 lg:p-4 bg-zinc-950">
      <Link to={'/AlquimiaSmoke/'}>
        <img
          src={logo}
          alt="logo image"
          className="w-20 md:w-32 lg:w-48 "
        />
      </Link>
      <CheckMyOrder/>
    </header>
  );
};
