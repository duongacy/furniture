import Image, { ImageProps } from "next/image";
import * as React from "react";

interface IHomeRecommendProps {}

const HomeRecommend: React.FunctionComponent<IHomeRecommendProps> = (props) => {
  return (
    <div className="tw-px-[16px] md:tw-px-[32px] tw-max-w-screen-xxl tw-mx-auto">
      <p className="tw-text-[36px] tw-leading-[44px] tw-my-[24px] lg:tw-my-[64px] tw-max-w-[810px]">
        Gợi ý dành cho bạn
      </p>
      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3">
        <HomeRecommendItem
          title="People + AI Guidebook People + AI Guidebook People + AI Guidebook"
          describe="Tactical guidance and best practices for designing human-centered
        AI productshuman-centered AI productshuman-centered AI
        productshuman-centered AI products"
          image={{
            src: "/images/home/home29.jpg",
          }}
        />
        <HomeRecommendItem
          title="People + AI Guidebook People + AI Guidebook People + AI Guidebook"
          describe="Tactical guidance and best practices for designing human-centered
        AI productshuman-centered AI productshuman-centered AI
        productshuman-centered AI products"
          image={{
            src: "/images/home/home29.jpg",
          }}
        />
        <HomeRecommendItem
          title="People + AI Guidebook People + AI Guidebook People + AI Guidebook"
          describe="Tactical guidance and best practices for designing human-centered
        AI productshuman-centered AI productshuman-centered AI
        productshuman-centered AI products"
          image={{
            src: "/images/home/home29.jpg",
          }}
        />
      </div>
    </div>
  );
};

export default HomeRecommend;

interface IHomeRecommendItemProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  title: string;
  describe: string;
  image: ImageProps;
}

const HomeRecommendItem: React.FunctionComponent<IHomeRecommendItemProps> = ({
  image,
  describe,
  title,
  ...props
}) => {
  return (
    <a
      className={`tw-block hover:tw-shadow-md tw-p-[16px] md:tw-p-[32px] ${props.className}`}
      {...props}>
      <div className=" tw-flex tw-flex-col tw-gap-[32px]">
        <div className="tw-h-[4px] tw-bg-error"></div>
        <p className="tw-text-[24px] tw-font-[400] tw-line-clamp-1">{title}</p>
        <p className="tw-text-[18px] tw-leading-[30px] tw-tracking-[.00625rem] tw-font-[300] tw-line-clamp-2">
          {describe}
        </p>
      </div>
      <div className="tw-mt-[32px] tw-aspect-[790/380] tw-flex-auto tw-relative">
        <Image {...image} layout="fill" />
      </div>
    </a>
  );
};
