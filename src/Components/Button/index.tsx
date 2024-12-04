import { ButtonProps } from "../../Types";

const Button = ({ variant, css, label, children, onClick }: ButtonProps) => {
  return (
    <button
      className={`flex gap-[10px] py-2 px-3 border-[0.5px] cursor-pointer items-center ${
        variant === "filled"
          ? "bg-gradient-filled"
          : "bg-gradient-transparent gradient-border-varient-third"
      } ${css}`}
      onClick={() => (onClick ? onClick() : "")}
    >
      {label} {children}
    </button>
  );
};

export default Button;
