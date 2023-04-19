import * as contentful from "contentful";
import { NextPage } from "next";
import Image from "next/image";
import React from "react";

import { LogoSection } from "@/components/logo-section";

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

  const textMap: Record<
    string,
    {
      en: string;
      fi: string;
      sv: string;
    }
  > = texts.items.reduce(
    (acc, t) => ({
      ...acc,
      [t.sys.id]: {
        en: t.fields.english,
        fi: t.fields.finnish,
        sv: t.fields.swedish,
      },
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

  const richTextMap: Record<
    string,
    {
      en: string;
      fi: string;
      sv: string;
    }
  > = texts.items.reduce(
    (acc, t) => ({
      ...acc,
      [t.sys.id]: {
        en: t.fields.english,
        fi: t.fields.finnish,
        sv: t.fields.swedish,
      },
    }),
    {}
  );

  return (
    <main className="">
      <div className="relative w-full h-screen">
        <video
          autoPlay
          muted
          loop
          className="absolute object-cover w-full h-full"
        >
          <source src="/loop.mp4" type="video/mp4" />
        </video>
        <div className="absolute bottom-0 bg-gradient-to-t from-tyre to-transparent h-[30vh] w-full" />
      </div>
      <div className="relative z-10 -mt-[40vh] max-w-6xl mr-auto ml-auto px-8 pt-8 pb-24 lg:py-16 2xl:px-0">
        <div className="mb-16 lg:mb-32">
          <h1 className="font-black text-xl mb-2 uppercase text-fire">
            TN Experience
          </h1>
          <h2 className="font-black text-4xl">
            {textMap["1ainiOKH0CGbJZAVXAxMLv"][lang]}
          </h2>
        </div>
        <div className="max-w-4xl mb-32 leading-relaxed">
          <p className="mb-4">{textMap["6fwTZlCJ3PreqbcvH81BXh"][lang]}</p>
          <p className="mb-4">{textMap["144AUl108cUcTg5zJDAkQ1"][lang]}</p>
        </div>
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
                <TextHilight>Your logo</TextHilight> on the van & trailer,
                competition cars, team clothes, competition overalls and roll-up
                sign
              </BulletPoint>
              <BulletPoint>
                <TextHilight>Marketing and visibility</TextHilight> on social
                media
              </BulletPoint>
              <BulletPoint>
                <TextHilight>Participation</TextHilight> at your company events
                and conferences
              </BulletPoint>
              <BulletPoint>
                <TextHilight>Free entrance</TextHilight> to all competitions in
                Finland and Sweden
              </BulletPoint>
            </BulletPointContainer>
            <div className="flex-grow" />
            <div className="flex flex-col items-end">
              <span className="text-3xl">2250 €</span>
              <span className="text-md">for one year</span>
            </div>
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
                <TextHilight>A unique chance</TextHilight> to try what it's like
                to be a race car driver - with a race car driver
              </BulletPoint>
              <BulletPoint>
                <TextHilight>A driving day</TextHilight> at Kemora or
                Botniaring, with a race car and coaching
              </BulletPoint>
              <BulletPoint>
                <TextHilight>Excellent</TextHilight> for groups between 4 to 10
                people, as a recreational day for the staff or as a customer
                event.
              </BulletPoint>
              <BulletPoint>
                <TextHilight>Food</TextHilight>, drink and coffee included
              </BulletPoint>
            </BulletPointContainer>
            <div className="flex-grow" />
            <div className="flex flex-col items-end">
              <span className="text-3xl">400 €</span>
              <span className="text-md">per person</span>
            </div>
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
                <TextHilight ultra>Visibility and the experience</TextHilight>{" "}
                in one exclusive package.
              </BulletPoint>
              <BulletPoint ultra>
                <TextHilight ultra>Save 500€</TextHilight> off the Visibility
                package
              </BulletPoint>
              <BulletPoint ultra>
                <TextHilight ultra>Experience package</TextHilight> (4 -10
                people) at 400€ / person
              </BulletPoint>
            </BulletPointContainer>
            <div className="flex-grow" />
            <div className="flex flex-col items-end">
              <span className="text-3xl">3350 €</span>
              <span className="text-md">starting from</span>
            </div>
          </PackageContainer>
        </div>
        <div className="relative"></div>
        <div>
          <LogoSection />
        </div>
      </div>
    </main>
  );
};

const PackageContainer: React.FC<{ ultra?: boolean; children: any }> = (
  props
) => (
  <div className="relative flex">
    <div className="p-4 bg-tyre flex flex-col flex-grow">{props.children}</div>
    <div
      className={`absolute left-0 right-0 top-16 h-[1px] bg-gradient-to-r to-transparent to-20% ${
        props.ultra ? `from-ultra` : `from-fire`
      }`}
    />
    <div
      className={`absolute top-16 bottom-0 left-0 w-[1px] bg-gradient-to-b to-transparent to-60% ${
        props.ultra ? `from-ultra` : `from-fire`
      }`}
    />
    <div
      className={`absolute left-0 right-0 bottom-0 h-[1px] bg-gradient-to-l to-transparent to-60% ${
        props.ultra ? `from-ultra` : `from-fire`
      }`}
    />
    <div
      className={`absolute top-16 bottom-0 right-0 w-[1px] bg-gradient-to-t to-transparent to-60% ${
        props.ultra ? `from-ultra` : `from-fire`
      }`}
    />
    <div
      className={`blur-[1px] absolute left-0 right-0 top-16 h-[1px] bg-gradient-to-r to-transparent to-40% ${
        props.ultra ? `from-ultra` : `from-fire`
      }`}
    />
    <div
      className={`blur-[1px] absolute top-16 bottom-0 left-0 w-[1px] bg-gradient-to-b to-transparent to-20% ${
        props.ultra ? `from-ultra` : `from-fire`
      }`}
    />
    <div
      className={`blur-[1px] absolute left-0 right-0 bottom-0 h-[1px] bg-gradient-to-l to-transparent to-60% ${
        props.ultra ? `from-ultra` : `from-fire`
      }`}
    />
    <div
      className={`blur-[1px] absolute top-16 bottom-0 right-0 w-[1px] bg-gradient-to-t to-transparent to-60% ${
        props.ultra ? `from-ultra` : `from-fire`
      }`}
    />
  </div>
);

const TextHilight: React.FC<{
  children: any;
  ultra?: boolean;
}> = (props) => {
  return (
    <span className={`font-black ${props.ultra ? `text-ultra` : `text-fire`}`}>
      {props.children}
    </span>
  );
};

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
