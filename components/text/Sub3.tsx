import * as React from "react";
import { TextProps } from ".";

const Sub3: React.FunctionComponent<TextProps> = ({ className, ...props }) => {
  return (
    <p
      className={`tw-text-[14px] tw-font-bold tw-leading-[17px] ${className}`}
      {...props}
    />
  );
};

export default Sub3;
