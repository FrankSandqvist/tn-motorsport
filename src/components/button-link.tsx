import Link from "next/link";
import React from "react";

export const ButtonLink: React.FC<{
  href: string;
  ultra?: boolean;
  children?: any;
  className?: string;
}> = (props) => {
  return (
    <Link
      href={props.href}
      className={`flex flex-row items-center justify-center p-4 border border-transparent duration-300 transition-all ${
        props.ultra ?  `hover:drop-shadow-ultra hover:border-ultra border-b-ultra` :`hover:drop-shadow-fire hover:border-fire border-b-fire`
      } ${props.className ?? ``}`}
    >
      {props.children}
    </Link>
  );
};
