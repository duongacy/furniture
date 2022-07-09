import { Input, InputProps } from "antd";
import { PasswordProps } from "antd/lib/input";
import * as React from "react";
import { getInputClassBySize, getSizeInputIconBySize } from "..";
import { CtsEyeFilled, CtsEyeOutlined } from "../../icons";

const CtsInputPassword: React.FunctionComponent<PasswordProps> = ({
  className,
  size,
  ...props
}) => {
  return (
    <Input.Password
      iconRender={(visible) =>
        visible ? <CtsEyeFilled size={size} /> : <CtsEyeOutlined  size={size}/>
      }
      className={`${getInputClassBySize(size)} ${className}`}
      {...props}
    />
  );
};

export default CtsInputPassword;
