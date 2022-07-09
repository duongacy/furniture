import * as React from "react";
import { TextProps } from ".";

const H5: React.FunctionComponent<TextProps> = ({ className, ...props }) => {
  return (
    <h5
      className={`tw-text-[24px] tw-font-bold tw-leading-[40px] ${className}`}
      {...props}
    />
  );
};

export default H5;
