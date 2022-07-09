import * as React from "react";
import { TextProps } from ".";

const Sub1: React.FunctionComponent<TextProps> = ({ className, ...props }) => {
  return (
    <p
      className={`tw-text-[18px] tw-font-medium tw-leading-[22px] ${className}`}
      {...props}
    />
  );
};

export default Sub1;
