import * as React from "react";
import { TextProps } from ".";

const Body3: React.FunctionComponent<TextProps> = ({ className, ...props }) => {
  return (
    <p
      className={`tw-text-[14px] tw-font-normal tw-leading-[17px] ${className}`}
      {...props}
    />
  );
};

export default Body3;
