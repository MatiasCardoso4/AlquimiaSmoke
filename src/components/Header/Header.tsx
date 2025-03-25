import { Link } from "react-router-dom";
import { CartHeaderTag } from "../CartHeaderTag/CartHeaderTag";
import {logo} from '../../../public/images/index'
export const Header = () => {
  return (
    <header className=" flex w-full justify-between p-2 lg:p-4 ">
      <Link to={'/AlquimiaSmoke'}>
        <img
          src={logo}
          alt="logo image"
          className="w-20 md:w-32 lg:w-48 "
        />
      </Link>
      <CartHeaderTag/>
    </header>
  );
};
