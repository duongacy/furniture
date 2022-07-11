import Image from "next/image";
import * as React from "react";
import { Container } from "react-bootstrap";

interface IHomeCollectionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const HomeCollection: React.FunctionComponent<IHomeCollectionProps> = (
  props
) => {
  return (
    <div
      className={`tw-px-[16px] md:tw-px-[32px] tw-max-w-screen-xxl tw-mx-auto ${props.className}`}>
      <p className="tw-text-[36px] tw-leading-[44px] tw-max-w-[810px] tw-mb-[64px]">
        Bộ sưu tập
      </p>
      <HomeCollectionItem
        title="Material Design"
        describe="Find the latest Material Design tools, resources, and theory all in
            one place."
        imgSrc="/images/home/home29.jpg"
        listProduct={[{ name: "Design", link: "/" }]}
      />
      <HomeCollectionItem
        title="Material Design"
        describe="Find the latest Material Design tools, resources, and theory all in
            one place."
        imgSrc="/images/home/home29.jpg"
        listProduct={[{ name: "Design", link: "/" }]}
      />
    </div>
  );
};

export default HomeCollection;
interface IHomeCollectionItemProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  title: string;
  describe: string;
  listProduct: {
    link: string;
    name: string;
  }[];
  imgSrc: string;
}

const HomeCollectionItem: React.FunctionComponent<IHomeCollectionItemProps> = ({
  title,
  describe,
  listProduct,
  imgSrc,
  ...props
}) => {
  return (
    <div
      className={`tw-p-[16px] md:tw-p-[32px] hover:tw-shadow-md tw-transform-gpu tw-duration-300 tw-flex tw-flex-col-reverse lg:tw-flex-row tw-gap-[24px] lg:tw-gap-[64px] ${props.className}`}
      {...props}>
      <div className="tw-w-full lg:tw-w-[380px] tw-shrink-0">
        <div className="tw-h-[4px] tw-bg-black tw-my-[24px] lg:tw-my-0"></div>
        <p className="tw-mt-[24px] tw-text-[24px] tw-font-[400]">{title}</p>
        <p className="tw-text-[18px] tw-leading-[30px] tw-tracking-[.00625rem] tw-font-[300]">
          {describe}
        </p>
        <ul className="tw-list-inside tw-list-disc tw-mt-[16px]">
          {listProduct.map((item) => (
            <li>
              <a
                href={item.link}
                className="tw-text-[18px] tw-text-[#1967d2] tw-underline tw-leading-[30px] tw-underline-offset-[3px] tw-font-[300] hover:tw-font-[400]">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="tw-aspect-[6/4] lg:tw-aspect-[790/380] tw-flex-auto tw-relative">
        <Image src={imgSrc} layout="fill" />
      </div>
    </div>
  );
};
