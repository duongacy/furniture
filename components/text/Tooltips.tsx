import * as React from "react";
import { TextProps } from ".";

const Tooltips: React.FunctionComponent<TextProps> = ({
  className,
  ...props
}) => {
  return (
    <span
      className={`tw-text-[10px] tw-font-semibold tw-leading-[12px] ${className}`}
      {...props}
    />
  );
};

export default Tooltips;
