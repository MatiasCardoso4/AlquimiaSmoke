import {lupa} from '../../../public/images/index'

interface Params {
  displayName: boolean;
  onClick: () => void;
}

export const OrderList = ({ displayName,onClick }: Params) => {
  return (
    <div
      className={` ${
        displayName ? "fixed" : "hidden"
      } w-[23%] h-screen right-0  top-[30%]`}
    >
      <div className="h-auto bg-zinc-200 p-4 rounded-md">
        <div className="flex w-full justify-between ">
          <h3 className="text-zinc-800 text-xl ">Tu Pedido</h3>
          <button className="font-bold" onClick={onClick}>X</button>
        </div>
        <span className="w-full flex justify-center">
          <img
            className="w-[300px]"
            src={lupa}
            alt="imagen lupa"
          />
        </span>
      </div>
    </div>
  );
};
