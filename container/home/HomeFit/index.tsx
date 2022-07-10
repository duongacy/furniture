import * as React from "react";
import { Container, ContainerProps } from "react-bootstrap";
import { H4 } from "../../../components/text";

const HomeFit: React.FunctionComponent<ContainerProps> = ({
  className,
  ...props
}) => {
  return (
    <Container className={`${className}`} {...props}>
      <H4 className="tw-font-[500]">Được yêu thích nhất</H4>
      <RecommendGrid className="tw-mt-[24px]">
        <HomeFitItem
          image={{
            src: "./images/home/home26.jpg",
            alt: "",
          }}
        />
        <AdvantageBox
          image={{
            src: "./images/home/home15.png",
            alt: "",
          }}
        />
        <AdvantageBox
          image={{
            src: "./images/home/home16.png",
            alt: "",
          }}
        />
        <HomeFitItem
          image={{
            src: "./images/home/home27.jpg",
            alt: "",
          }}
        />
        <HomeFitItem
          image={{
            src: "./images/home/home28.jpg",
            alt: "",
          }}
        />
        <AdvantageBox
          image={{
            src: "./images/home/home21.png",
            alt: "",
          }}
        />
      </RecommendGrid>
    </Container>
  );
};

export default HomeFit;

interface IRecommendGridProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}
const RecommendGrid: React.FC<IRecommendGridProps> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={`tw-grid tw-grid-cols-1 md:tw-grid-cols-10 tw-gap-[16px] md:tw-gap-[24px] ${className}`}
      {...props}
    />
  );
};

interface IHomeFitItemProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  image: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
}
const HomeFitItem: React.FC<IHomeFitItemProps> = ({
  className,
  image,
  ...props
}) => {
  return (
    <a
      className={`block tw-cursor-pointer tw-aspect-[5/3] md:tw-aspect-auto md:tw-col-span-6 lg:tw-col-span-7 tw-relative tw-overflow-hidden tw-group  ${className}`}
      {...props}>
      <div className="tw-absolute tw-inset-[-24px] group-hover:tw-inset-0 tw-transform-gpu tw-duration-300 tw-border-solid tw-border-secondary-80 tw-border-[24px] tw-opacity-50 tw-z-10"></div>
      <img
        {...image}
        className="tw-absolute tw-inset-0 tw-w-full tw-h-full tw-object-cover tw-outline tw-outline-[2px] tw-outline-offset-0 group-hover:tw-outline-offset-[-26px] tw-outline-white tw-transform-gpu tw-duration-300"
        alt=""
      />
    </a>
  );
};

interface IAdvantageBoxProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  image: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
}
const AdvantageBox: React.FC<IAdvantageBoxProps> = ({
  className,
  image,
  ...props
}) => {
  return (
    <div
      className={`tw-hidden md:tw-block tw-aspect-square tw-bg-secondary-50 md:tw-col-span-4 lg:tw-col-span-3 tw-relative ${className}`}
      {...props}>
      <img {...image} className="tw-absolute tw-inset-0 tw-w-full tw-h-full" />
    </div>
  );
};
