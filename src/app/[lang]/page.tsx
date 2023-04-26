import Image from "next/image";
import React from "react";

import { ButtonLink } from "@/components/button-link";
import { Hero } from "@/components/hero";
import { InstagramFeedSection } from "@/components/instagram-feed-section";
import { LogoSection } from "@/components/logo-section";
import { RichText } from "@/components/rich-text";
import { Wrapper } from "@/components/wrapper";
import { getLocalizedRichTextMap, getLocalizedTextMap } from "@/utils/get-texts";
import { faBoltLightning, faFlagCheckered, faGaugeHigh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = async ({ params }: any) => {
  const lang = params.lang as "en" | "fi" | "sv";

  const textMap = await getLocalizedTextMap(lang);
  const richTextMap = await getLocalizedRichTextMap(lang);

  return (
    <main className="">
      <Hero videoSrc="/loop-h264.mp4" />
      <Wrapper overlap>
        <div className="mb-16 lg:mb-32">
          <h1 className="font-black text-lg mb-2 uppercase text-fire md:text-xl">
            {textMap["tD7fgoadaYhxkZz0YlAHL"]}
          </h1>
          <h2 className="font-black text-3xl md:text-4xl">
            {textMap["1ainiOKH0CGbJZAVXAxMLv"]}
          </h2>
        </div>
        <div className="max-w-4xl mb-32 leading-relaxed">
          <RichText className="mb-8" doc={richTextMap["4OdMHxuD0moTTaByPOTjYI"]} />
        </div>
      </Wrapper>
      <Wrapper className="mb-44">
        <div className="grid gap-16 grid-cols-1 lg:grid-cols-3 2xl:-mx-32">
          <PackageContainer>
            <h2 className="text-3xl font-black mb-6 drop-shadow-fire relative z-20 lg:-ml-16 lg:mb-4">
              {textMap["1AIMgklUjBzdU6ZQQQkcQi"]}
            </h2>
            <BulletPointContainer>
              <div className="relative h-48 w-[90%] -mt-16 mb-8 place-self-end">
                <Image
                  src="/legends.jpg"
                  alt="Legends"
                  fill
                  className="object-contain object-right-bottom mix-blend-screen "
                />
              </div>
              <BulletPoint>
                <RichText doc={richTextMap["6acR7B38RDRJ3ZFU9RUf5h"]} />
              </BulletPoint>
              <BulletPoint>
                <RichText doc={richTextMap["6JSsPeX7zwnP3z6SIIFksf"]} />
              </BulletPoint>
              <BulletPoint>
                <RichText doc={richTextMap["6xW1E0XBgZpH5MoQEnDzd6"]} />
              </BulletPoint>
              <BulletPoint>
                <RichText doc={richTextMap["72CGZvT3N68czEMqDwz1bU"]} />
              </BulletPoint>
            </BulletPointContainer>
            <div className="flex-grow" />
            <ButtonLink href="/" className="z-10 font-black uppercase">
              <FontAwesomeIcon
                icon={faBoltLightning}
                className="mr-4 text-xl"
              />
              {textMap["3N8xLfBKXUpTBqt5yoS6r5"]}
            </ButtonLink>
          </PackageContainer>
          <PackageContainer>
            <h2 className="text-3xl font-black mb-6 drop-shadow-fire relative z-20 lg:-ml-16 lg:mb-4">
              {textMap["Xsqd5YgWe6X6jUTsZ9ce5"]}
            </h2>
            <BulletPointContainer>
              <div className="relative h-48 w-[90%] -mt-16 mb-8 place-self-end">
                <Image
                  src="/nissan.jpg"
                  alt="Nissan"
                  fill
                  className="object-contain object-right-bottom mix-blend-screen "
                />
              </div>
              <BulletPoint>
                <RichText doc={richTextMap["4rTsaVaMEi6CfsaZkIev1s"]} />
              </BulletPoint>
              <BulletPoint>
                <RichText doc={richTextMap["5yoKx1Zj06vgzNfD4MLDT4"]} />
              </BulletPoint>
              <BulletPoint>
                <RichText doc={richTextMap["3rmBmfY0KT28C1KzxgmAWS"]} />
              </BulletPoint>
              <BulletPoint>
                <RichText doc={richTextMap["2lSdsn7HtcIT6dKRQd6v2L"]} />
              </BulletPoint>
            </BulletPointContainer>
            <div className="flex-grow" />
            <ButtonLink href="/" className="z-10 font-black uppercase">
              <FontAwesomeIcon
                icon={faFlagCheckered}
                className="mr-4 text-xl"
              />
              {textMap["5FysFcrrONGAFl8QX3mMzD"]}
            </ButtonLink>
          </PackageContainer>
          <PackageContainer ultra>
            <h2 className="text-3xl font-black mb-6 drop-shadow-ultra relative z-20 lg:-ml-16 lg:mb-4">
              {textMap["3QVNnoVlOqvaCRu0oCSrhI"]}
            </h2>
            <BulletPointContainer>
              <div className="relative h-48 w-[90%] -mt-16 mb-8 place-self-end">
                <Image
                  src="/exclusive.jpg"
                  alt="Exclusive"
                  fill
                  className="object-contain object-right-bottom mix-blend-screen "
                />
              </div>

              <BulletPoint ultra>
                Visibility and the experience in one exclusive package.
              </BulletPoint>
            </BulletPointContainer>
            <div className="flex-grow" />
            <ButtonLink href="/" className="z-10 font-black uppercase" ultra>
              <FontAwesomeIcon icon={faGaugeHigh} className="mr-4 text-xl" />
              {textMap["2th941poM6bWlz7ekRfzlf"]}
            </ButtonLink>
          </PackageContainer>
        </div>
        <div className="relative"></div>
      </Wrapper>
      <InstagramFeedSection textMap={textMap} className="mb-32" />
      <LogoSection textMap={textMap} className="mb-64" />
    </main>
  );
};

const PackageContainer: React.FC<{ ultra?: boolean; children: any }> = (
  props
) => (
  <div className="relative flex">
    <div
      className={` pointer-events-none absolute left-0 right-0 top-16 bottom-0 bg-[#0003]`}
    />
    <div
      className={` pointer-events-none absolute left-0 right-0 top-16 h-[1px] bg-gradient-to-r to-transparent to-20% ${
        props.ultra ? `from-ultra` : `from-fire`
      }`}
    />
    <div
      className={` pointer-events-none absolute top-16 bottom-0 left-0 w-[1px] bg-gradient-to-b to-transparent to-60% ${
        props.ultra ? `from-ultra` : `from-fire`
      }`}
    />
    <div
      className={` pointer-events-none absolute left-0 right-0 bottom-0 h-[1px] bg-gradient-to-l to-transparent to-60% ${
        props.ultra ? `from-ultra` : `from-fire`
      }`}
    />
    <div
      className={` pointer-events-none absolute top-16 bottom-0 right-0 w-[1px] bg-gradient-to-t to-transparent to-60% ${
        props.ultra ? `from-ultra` : `from-fire`
      }`}
    />
    <div
      className={` pointer-events-none blur-[1px] absolute left-0 right-0 top-16 h-[1px] bg-gradient-to-r to-transparent to-40% ${
        props.ultra ? `from-ultra` : `from-fire`
      }`}
    />
    <div
      className={` pointer-events-none blur-[1px] absolute top-16 bottom-0 left-0 w-[1px] bg-gradient-to-b to-transparent to-20% ${
        props.ultra ? `from-ultra` : `from-fire`
      }`}
    />
    <div
      className={` pointer-events-none blur-[1px] absolute left-0 right-0 bottom-0 h-[1px] bg-gradient-to-l to-transparent to-60% ${
        props.ultra ? `from-ultra` : `from-fire`
      }`}
    />
    <div
      className={` pointer-events-none blur-[1px] absolute top-16 bottom-0 right-0 w-[1px] bg-gradient-to-t to-transparent to-60% ${
        props.ultra ? `from-ultra` : `from-fire`
      }`}
    />
    <div className="p-4 flex flex-col flex-grow">{props.children}</div>
  </div>
);

const BulletPointContainer: React.FC<{
  children: any;
}> = (props) => {
  return <div className="-ml-3 text-sm flex flex-col">{props.children}</div>;
};

const BulletPoint: React.FC<{
  children: any;
  ultra?: boolean;
}> = (props) => {
  return (
    <div className="mb-4 relative">
      <div
        className={`absolute left-0 top-0 bottom-0 w-[1px] mr-2 bg-gradient-to-b to-transparent to-80% ${
          props.ultra ? `from-ultra` : `from-fire`
        }`}
      />
      <div
        className={`absolute left-0 top-0 bottom-0 w-[1px] blur-[1px] mr-2 bg-gradient-to-b to-transparent from-80% ${
          props.ultra ? `from-ultra` : `from-fire`
        }`}
      />
      <div className="ml-4">{props.children}</div>
    </div>
  );
};

export default Home;
