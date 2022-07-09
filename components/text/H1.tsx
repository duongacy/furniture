import * as React from "react";
import { TextProps } from ".";

const H1: React.FunctionComponent<TextProps> = ({ className, ...props }) => {
  return (
    <h1
      className={`tw-text-[96px] tw-font-extrabold tw-leading-[116px] ${className}`}
      {...props}
    />
  );
};

export default H1;
