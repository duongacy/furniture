import Image from "next/image";
import * as React from "react";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";

interface IAboutUsProps {}

const AboutUs: React.FunctionComponent<IAboutUsProps> = (props) => {
  return (
    <>
      <Header />
      <div className="tw-px-[16px] md:tw-px-[32px] tw-max-w-screen-xxl tw-mx-auto tw-mb-[16px] tw-py-[64px]">
        <p className="tw-text-[36px] tw-leading-[44px] tw-max-w-[810px] tw-mt-[88px] tw-mb-[32px]">
          Supporting the future of design and technology
        </p>
        <div className="tw-aspect-square md:tw-aspect-[1216/608] tw-relative">
          <Image
            src={"/images/about-us/about1.jpg"}
            layout="fill"
            className="tw-object-cover"
          />
        </div>
        <div className="tw-my-[32px] md:tw-my-[64px] tw-flex tw-flex-col tw-gap-[16px]">
          <p className="tw-text-[18px] tw-leading-[30px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
            commodi id et similique magnam rerum. Vel error velit assumenda
            minus nesciunt nulla quas, sed consequatur ad eius odit id?
            Consectetur eveniet porro id, autem earum harum magni dolorem,
            numquam, reiciendis delectus eius dicta! Unde minus repellendus
            eaque, sint non atque neque quae ratione sed vel hic obcaecati
            aperiam ducimus perferendis?
          </p>
          <p className="tw-text-[18px] tw-leading-[30px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            ducimus laborum dicta illum, ipsam voluptate cum blanditiis
            reiciendis soluta ad.
          </p>
          <p className="tw-text-[18px] tw-leading-[30px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            veritatis accusamus, corporis quis eligendi nulla nihil nostrum
            tempora quisquam earum vero rem recusandae, ab amet iusto placeat
            perspiciatis tenetur culpa!
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
