import * as React from "react";
import { TextProps } from ".";

const H4: React.FunctionComponent<TextProps> = ({ className, ...props }) => {
  return (
    <h4
      className={`tw-text-[34px] tw-font-bold tw-leading-[41px] ${className}`}
      {...props}
    />
  );
};

export default H4;
