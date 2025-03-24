interface Params {
  label: string;
  onClick?: () => void;
}

export const Button = ({ label, onClick }: Params) => {
  return (
    <button
      onClick={onClick}
      className=" rounded-4xl  font-bold cursor-pointer "
    >
      {label}
    </button>
  );
};
