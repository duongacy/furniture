import * as React from "react";
import { TextProps } from ".";

const Body2: React.FunctionComponent<TextProps> = ({ className, ...props }) => {
  return (
    <p
      className={`tw-text-[16px] tw-font-normal tw-leading-[19px] ${className}`}
      {...props}
    />
  );
};

export default Body2;
