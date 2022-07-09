import type { NextPage } from "next";
import Link from "next/link";
import {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  ImgHTMLAttributes,
} from "react";
import { Container, Stack } from "react-bootstrap";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

import { H4, H5, Sub3 } from "../components/text";
import HomeCollection from "../container/home/HomeCollection";
import HomeFit from "../container/home/HomeFit";
import HomeIntroduce from "../container/home/HomeIntroduce";
import HomeRecommend from "../container/home/HomeRecommend";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <HomeIntroduce />
      <HomeFit className="tw-mt-[88px]" />
      <HomeCollection className="tw-mt-[88px]" />
      <HomeRecommend className="tw-mt-[88px]" />
      <Footer className="tw-mt-[32px]" />
    </>
  );
};

export default Home;
