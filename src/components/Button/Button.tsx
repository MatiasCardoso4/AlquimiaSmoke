interface Params {
  label: string;
  onClick?: () => void;
}

export const Button = ({ label, onClick }: Params) => {
  return (
    <button
      onClick={onClick}
      className="font-bold cursor-pointer "
    >
      {label}
    </button>
  );
};
