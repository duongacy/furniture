import * as React from "react";
import { Container, Stack } from "react-bootstrap";

interface IHomeIntroduceProps {}

const HomeIntroduce: React.FunctionComponent<IHomeIntroduceProps> = (props) => {
  return (
    <div className="tw-relative tw-py-[32px]">
      <img
        src="./images/home/home-bg.jpg"
        alt=""
        className="tw-h-full tw-absolute tw-inset-0 tw-object-cover tw-w-full"
      />
      <Container className="tw-relative tw-z-10 tw-flex">
        <Stack className="tw-w-[520px] tw-grow-0 tw-h-[396px] tw-font-semibold tw-gap-[16px] tw-items-start tw-justify-center"></Stack>
      </Container>
    </div>
  );
};

export default HomeIntroduce;
