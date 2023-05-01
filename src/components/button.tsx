import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export const Button: React.FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = (props) => {
  return (
    <button
      {...props}
      className="uppercase font-black flex flex-row items-center justify-center p-4 border border-transparent duration-300 transition-all hover:drop-shadow-fire hover:border-fire border-b-fire"
    >
      {props.children}
    </button>
  );
};
