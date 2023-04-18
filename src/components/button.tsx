import { ButtonI } from "../interface";

const Button: React.FC<ButtonI> = ({name, onClick, className=""}) => {
  return (
    <button className={`border rounded py-1 px-2 ${className}`} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
