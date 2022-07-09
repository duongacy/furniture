import * as React from "react";
import { TextProps } from ".";

const H3: React.FunctionComponent<TextProps> = ({ className, ...props }) => {
  return (
    <h3
      className={`tw-text-[48px] tw-font-extrabold tw-leading-[58px] ${className}`}
      {...props}
    />
  );
};

export default H3;
