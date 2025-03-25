import { Link } from "react-router-dom";
import { CartHeaderTag } from "../CartHeaderTag/CartHeaderTag";

export const Header = () => {
  return (
    <header className=" flex w-full justify-between p-2 lg:p-4 ">
      <Link to={'/AlquimiaSmoke'}>
        <img
          src={"../../../public/images/logo.png"}
          alt="logo image"
          className="w-20 md:w-32 lg:w-48 "
        />
      </Link>
      <CartHeaderTag/>
    </header>
  );
};
