import type { NextPage } from "next";
import Image from "next/image";
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
      <div className="tw-relative tw-bg-[#003C34]">
        <div className="tw-px-[16px] md:tw-px-[32px] tw-relative tw-z-10 tw-pt-[72px]">
          <div className="md:tw-pl-[64px] tw-mt-[32px] tw-text-white tw-max-w-[608px] tw-py-[88px]">
            <div className=" tw-text-[64px] tw-leading-[64px] tw-mb-[20px]  tw-font-[500]">
              Patterns
            </div>
            <p className="tw-mt-[24px] tw-text-[20px] tw-leading-[28px]">
              Our design patterns highlight key design opportunities for AI
              products. They’re organized around common questions in the product
              development process to help you find what you need.
            </p>
          </div>
        </div>
        <Image
          src="/images/home/hero-patterns.png"
          layout="fill"
          className="tw-object-cover tw-inset-0"
        />
      </div>

      <HomeCollection className="tw-pt-[64px]" />
      <HomeRecommend />
      <Footer className="tw-mt-[32px]" />
    </>
  );
};

export default Home;
