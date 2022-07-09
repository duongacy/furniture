import * as React from "react";
import { TextProps } from ".";

const Label2: React.FunctionComponent<TextProps> = ({
  className,
  ...props
}) => {
  return (
    <p
      className={`tw-text-[12px] tw-font-semibold tw-leading-[15px] tw-tracking-[0.02em] ${className}`}
      {...props}
    />
  );
};

export default Label2;
