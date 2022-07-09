import { Input, InputProps } from "antd";
import * as React from "react";
import { getInputClassBySize } from "..";

interface ICtsInputProps extends InputProps {}

const CtsInput: React.FunctionComponent<ICtsInputProps> = ({
  className,
  ...props
}) => {
  return (
    <Input
      className={`${getInputClassBySize(props.size)} ${className}`}
      {...props}
    />
  );
};

export default CtsInput;
