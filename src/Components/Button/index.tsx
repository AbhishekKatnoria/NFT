import { ButtonProps } from "../../Types";

const Button = ({ variant, css, label, children }: ButtonProps) => {
  return (
    <button
      className={`flex gap-[10px] py-2 px-3 border-[0.5px] cursor-pointer items-center ${
        variant === "filled" ? "bg-gradient-filled" : "bg-gradient-transparent"
      } ${css}`}
    >
      {label} {children}
    </button>
  );
};

export default Button;
