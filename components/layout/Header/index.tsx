import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { Container } from "react-bootstrap";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <>
      <div className="tw-bg-white tw-w-full tw-fixed tw-z-50 tw-rounded-b-[24px] tw-shadow-sm">
        <div className="tw-px-[16px] md:tw-px-[32px] tw-max-w-screen-xxl tw-mx-auto">
          <div className="tw-h-[72px] tw-flex tw-justify-between tw-items-center">
            <Link href="">
              <a className="tw-text-[24px] tw-block tw-h-[64px] tw-leading-[64px]">
                YLVN Design
              </a>
            </Link>
            <div className=" tw-hidden sm:tw-flex tw-gap-[16px] ">
              <NavLink href="/">Trang chủ</NavLink>

              <NavLink href="/product">Sản phẩm</NavLink>
              <NavLink href="/about-us">Về chúng tôi</NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

interface INavLinkProps extends LinkProps {
  children: React.ReactNode;
}
const NavLink: React.FC<INavLinkProps> = ({ children, ...props }) => {
  const router = useRouter();
  return (
    <Link {...props}>
      <button
        className={`tw-text-[14px] tw-border tw-border-[#003C34] hover:tw-bg-[#003C34] hover:tw-text-white
      ${
        router.asPath === props.href
          ? " tw-bg-[#003C34] tw-text-white"
          : " tw-text-[#003C34] tw-bg-white "
      }
      tw-border-solid tw-h-[36px] tw-px-[16px] tw-rounded-full tw-transform-gpu tw-duration-300`}>
        {children}
      </button>
    </Link>
  );
};
