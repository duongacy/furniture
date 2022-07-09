import * as React from "react";
import { TextProps } from ".";

const Body1: React.FunctionComponent<TextProps> = ({ className, ...props }) => {
  return (
    <p
      className={`tw-text-[18px] tw-font-normal tw-leading-[30px] ${className}`}
      {...props}
    />
  );
};

export default Body1;
