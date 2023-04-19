import * as contentful from "contentful";
import Image from "next/image";
import React from "react";

const content = contentful.createClient({
  accessToken: process.env.CONTENTFUL_API_KEY!,
  space: "r8lurnfo6cag",
});

const About = async ({ params }: any) => {
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
        <Image
          src="/about-hero.jpg"
          fill
          className="object-cover"
          alt="About"
        />
        <div className="absolute bottom-0 bg-gradient-to-t from-tyre to-transparent h-[30vh] w-full" />
      </div>
      <div className="relative z-10 -mt-[40vh] max-w-6xl mr-auto ml-auto px-8 pt-8 pb-24 lg:py-16 2xl:px-0">
        <div className="mb-16 lg:mb-32">
          <h1 className="font-black text-xl mb-2 uppercase text-fire">
            Since 20XX
          </h1>
          <h2 className="font-black text-4xl">About TN Motorsport</h2>
        </div>
        <div className="max-w-4xl mb-32 leading-relaxed">
          <p className="mb-4">{textMap["6fwTZlCJ3PreqbcvH81BXh"][lang]}</p>
        </div>
      </div>
      <div className="relative max-w-6xl mr-auto ml-auto px-8 pt-8 pb-24 lg:py-16 2xl:px-0">
        <div className="flex flex-row ">
          <div className="relative w-1/3 ">
            <Image
              src="/tommi.jpg"
              fill
              alt="Tommi"
              className="object-contain w-full h-full mix-blend-screen"
            />
          </div>
          <div className="w-2/3 pt-32">
            <h2 className="text-2xl font-black">Tommi Nyvall</h2>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
              eaque dolorem beatae necessitatibus hic, cum minus commodi
              obcaecati impedit, qui maxime vero reprehenderit? Eum, molestias.
              Earum aperiam perferendis recusandae ipsam!
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
