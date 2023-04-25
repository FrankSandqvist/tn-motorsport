import * as contentful from "contentful";
import Image from "next/image";
import React from "react";

import { ButtonLink } from "@/components/button-link";
import { Hero } from "@/components/hero";
import { InstagramFeedSection } from "@/components/instagram-feed-section";
import { LogoSection } from "@/components/logo-section";
import { ContentfulRichTextDocument, RichText } from "@/components/rich-text";
import { Wrapper } from "@/components/wrapper";
import { faBoltLightning, faFlagCheckered, faGaugeHigh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const content = contentful.createClient({
  accessToken: process.env.CONTENTFUL_API_KEY!,
  space: "r8lurnfo6cag",
});

const Home = async ({ params }: any) => {
  const lang = params.lang as "en" | "fi" | "sv";

  const texts = await content.getEntries<{
    english: string;
    finnish: string;
    swedish: string;
  }>({
    content_type: "text",
  });

  const textMap: Record<string, string> = texts.items.reduce(
    (acc, t) => ({
      ...acc,
      [t.sys.id]: {
        en: t.fields.english,
        fi: t.fields.finnish,
        sv: t.fields.swedish,
      }[lang],
    }),
    {}
  );

  const richTexts = await content.getEntries<{
    english: string;
    finnish: string;
    swedish: string;
  }>({
    content_type: "richText",
  });

  const richTextMap: Record<string, ContentfulRichTextDocument> =
    richTexts.items.reduce(
      (acc, t) => ({
        ...acc,
        [t.sys.id]: {
          en: t.fields.english,
          fi: t.fields.finnish,
          sv: t.fields.swedish,
        }[lang],
      }),
      {}
    );

  console.log(JSON.stringify(richTextMap));

  return (
    <main className="">
      <Hero videoSrc="/loop-h264.mp4" />
      <Wrapper overlap>
        <div className="mb-16 lg:mb-32">
          <h1 className="font-black text-xl mb-2 uppercase text-fire">
            TN Experience
          </h1>
          <h2 className="font-black text-4xl">
            {textMap["1ainiOKH0CGbJZAVXAxMLv"]}
          </h2>
        </div>
        <div className="max-w-4xl mb-32 leading-relaxed">
          <p className="mb-4">{textMap["6fwTZlCJ3PreqbcvH81BXh"]}</p>
          <p className="mb-4">{textMap["144AUl108cUcTg5zJDAkQ1"]}</p>
        </div>
      </Wrapper>
      <Wrapper className="mb-44">
        <div className="grid gap-16 grid-cols-1 lg:grid-cols-3 2xl:-mx-32">
          <PackageContainer>
            <h2 className="text-3xl font-black mb-4 -ml-16 drop-shadow-fire relative z-20">
              The Visibility
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
              Amplify Your Brand
            </ButtonLink>
          </PackageContainer>
          <PackageContainer>
            <h2 className="text-3xl font-black mb-4 -ml-16 drop-shadow-fire relative z-20">
              The Experience
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
              Book An Experience
            </ButtonLink>
          </PackageContainer>
          <PackageContainer ultra>
            <h2 className="text-3xl font-black mb-4 -ml-16 drop-shadow-ultra relative z-20">
              Or both?
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
              <BulletPoint ultra>
                Save 500€ off the Visibility package
              </BulletPoint>
              <BulletPoint ultra>
                Experience package (4 -10 people) at 400€ / person
              </BulletPoint>
            </BulletPointContainer>
            <div className="flex-grow" />
            <ButtonLink href="/" className="z-10 font-black uppercase" ultra>
              <FontAwesomeIcon icon={faGaugeHigh} className="mr-4 text-xl" />
              Take Me To The Redline
            </ButtonLink>
          </PackageContainer>
        </div>
        <div className="relative"></div>
      </Wrapper>
      <InstagramFeedSection className="mb-32" />
      <LogoSection className="mb-64" />
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
