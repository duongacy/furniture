import Link from "next/link";
import * as React from "react";
import { Container } from "react-bootstrap";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <>
      <div className=" tw-h-[48px] tw-bg-[#b30000] ">
        <Container fluid="md" className=" tw-justify-end tw-flex">
          <Link href="/">
            <a className="tw-animate-pulse tw-block tw-text-end tw-font-[700] tw-text-white tw-text-[14px] tw-leading-[48px] hover:tw-text-white">
              Cùng khám phá các chương trình khuyến mãi
            </a>
          </Link>
        </Container>
      </div>
      <div className="tw-bg-black">
        <Container fluid="md" className="tw-h-[72px]">
          <div className="tw-flex tw-h-full tw-items-center tw-justify-between">
            <Link href="/">
              <a className=" tw-text-white hover:tw-text-secondary-40 tw-font-[700] tw-text-[18px]">
                YLVN DESIGN
              </a>
            </Link>
            <div className="tw-gap-[8px] tw-hidden lg:tw-flex">
              <Link href="/">
                <a className=" hover:tw-text-white tw-text-secondary-40 tw-px-[8px]">
                  Design
                </a>
              </Link>
              <Link href="/">
                <a className=" hover:tw-text-white tw-text-secondary-40 tw-px-[8px]">
                  Components
                </a>
              </Link>
              <Link href="/">
                <a className=" hover:tw-text-white tw-text-secondary-40 tw-px-[8px]">
                  Develop
                </a>
              </Link>
              <Link href="/">
                <a className=" hover:tw-text-white tw-text-secondary-40 tw-px-[8px]">
                  Resource
                </a>
              </Link>
              <Link href="/">
                <a className=" hover:tw-text-white tw-text-secondary-40 tw-px-[8px]">
                  Blog
                </a>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
