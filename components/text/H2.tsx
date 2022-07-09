import * as React from "react";
import { TextProps } from ".";

const H2: React.FunctionComponent<TextProps> = ({ className, ...props }) => {
  return (
    <h2
      className={`tw-text-[64px] tw-font-extrabold tw-leading-[77px] ${className}`}
      {...props}
    />
  );
};

export default H2;
