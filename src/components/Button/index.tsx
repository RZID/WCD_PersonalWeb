import classNames from "classnames";
import ButtonProps from "./types";

const Button = ({ children, ...otherButtonProps }: ButtonProps) => {
  return (
    <button
      {...otherButtonProps}
      className={classNames(
        "p-5",
        "border",
        "rounded-full",
        "transition-all",
        "cursor-pointer",
        "text-gray-700",
        "border-gray-700",
        "hover:bg-gray-900",
        "hover:text-slate-100",
        otherButtonProps.className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
