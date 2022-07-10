import * as React from "react";
import { Container, ContainerProps } from "react-bootstrap";
import { H4 } from "../../../components/text";

interface IHomeRecommendProps extends ContainerProps {}
const HomeRecommend: React.FunctionComponent<IHomeRecommendProps> = ({
  className,
  ...props
}) => {
  return (
    <Container className={`${className}`} {...props}>
      <H4 className="tw-font-[500]">Recommended for you</H4>
      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-mt-[32px] tw-gap-[16px] md:tw-gap-[24px]">
        <ProductCard
          image={{
            src: "./images/home/home32.jpg",
            alt: "",
          }}
          name="Material Design 2 guidelines"
          description="Material Design 2 principles, styles, and best practices"
        />
        <ProductCard
          image={{
            src: "./images/home/home33.jpg",
            alt: "",
          }}
          name="Material Design 2 guidelines"
          description="Material Design 2 principles, styles, and best practices"
        />
        <ProductCard
          image={{
            src: "./images/home/home34.jpg",
            alt: "",
          }}
          name="Material Design 2 guidelines"
          description="Material Design 2 principles, styles, and best practices"
        />
        <ProductCard
          image={{
            src: "./images/home/home35.jpg",
            alt: "",
          }}
          name="Material Design 2 guidelines"
          description="Material Design 2 principles, styles, and best practices"
        />
      </div>
    </Container>
  );
};

export default HomeRecommend;

interface IProductCardProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  name: string;
  description: string;
  image: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
}
const ProductCard: React.FC<IProductCardProps> = ({
  name,
  description,
  image,
  ...props
}) => {
  return (
    <a
      className={`tw-block hover:tw-scale-105 tw-no-underline tw-transform-gpu tw-duration-300 ${props.className}`}
      {...props}>
      <div className="tw-aspect-[5/3] tw-bg-primary-10 tw-relative">
        <img
          {...image}
          className="tw-absolute tw-w-full tw-h-full tw-object-cover"
        />
      </div>
      <div className="tw-py-[16px]">
        <div className="tw-text-[18px] tw-text-secondary-90 tw-font-semibold">
          {name}
        </div>
        <p className=" tw-text-secondary-70 tw-line-clamp-2 tw-text-[14px]">
          {description}
        </p>
      </div>
    </a>
  );
};
