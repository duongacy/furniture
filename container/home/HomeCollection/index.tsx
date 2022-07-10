import * as React from "react";
import { Container, ContainerProps } from "react-bootstrap";
import { H4 } from "../../../components/text";

interface IHomeCollectionProps extends ContainerProps {}

const HomeCollection: React.FunctionComponent<IHomeCollectionProps> = ({
  className,
  ...props
}) => {
  return (
    <Container className={`${className}`} {...props}>
      <H4 className="tw-font-[500]">Bộ sưu tập</H4>
      <HomeCollectionGrid>
        <CollectionItem image={{ src: "./images/home/home29.jpg" }} />
        <CollectionItem image={{ src: "./images/home/home30.jpg" }} />
        <CollectionItem image={{ src: "./images/home/home31.jpg" }} />
      </HomeCollectionGrid>
    </Container>
  );
};

export default HomeCollection;

interface ICollectionItemProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  image?: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
}

const CollectionItem: React.FunctionComponent<ICollectionItemProps> = ({
  image,
  ...props
}) => {
  return (
    <a
      className={`tw-aspect-[5/3] md:tw-aspect-square tw-relative hover:tw-scale-105 tw-transform-gpu tw-duration-500 ${props.className}`}
      {...props}>
      <img
        className={`tw-w-full tw-h-full tw-absolute tw-inset-0 tw-object-cover ${image?.className}`}
        {...image}
      />
    </a>
  );
};

const HomeCollectionGrid: React.FunctionComponent<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ className, ...props }) => {
  return (
    <div
      className={`tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-mt-[24px] tw-gap-[16px] md:tw-gap-[24px] ${className}`}
      {...props}
    />
  );
};
