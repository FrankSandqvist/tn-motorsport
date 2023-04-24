import * as contentful from "contentful";
import Image from "next/image";
import React from "react";

import { Hero } from "@/components/hero";
import { InstagramFeedSection } from "@/components/instagram-feed-section";
import { Wrapper } from "@/components/wrapper";

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
      <Hero imageSrc="/about-hero.jpg" />
      <Wrapper overlap>
        <div className="mb-16 lg:mb-32">
          <h1 className="font-black text-xl mb-2 uppercase text-fire">
            Since 20XX
          </h1>
          <h2 className="font-black text-4xl">About TN Motorsport</h2>
        </div>
        <div className="max-w-4xl mb-64 leading-relaxed">
          <p className="mb-4">{textMap["6fwTZlCJ3PreqbcvH81BXh"][lang]}</p>
        </div>
      </Wrapper>
      <Wrapper className="mb-16">
        <div className="flex flex-row ">
          <div className="relative w-1/3 -mt-32">
            <Image
              src="/tommi.jpg"
              fill
              alt="Tommi"
              className="object-contain w-full h-full mix-blend-screen"
            />
            <div className="absolute h-px left-0 bottom-0 -right-32 bg-gradient-to-r from-transparent via-fire to-transparent via-20%" />
            <div className="absolute h-px left-0 bottom-0 -right-64 bg-gradient-to-r from-transparent via-fire to-transparent via-20% blur-[1px]" />
          </div>
          <div className="w-2/3 pt-32 pb-8">
            <h3 className="text-fire uppercase font-black">THE DRIVER</h3>
            <h2 className="text-4xl font-black drop-shadow-fire mb-6">
              Tommi Nyvall
            </h2>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
              eaque dolorem beatae necessitatibus hic, cum minus commodi
              obcaecati impedit, qui maxime vero reprehenderit? Eum, molestias.
              Earum aperiam perferendis recusandae ipsam!
            </div>
          </div>
        </div>
      </Wrapper>
      <Wrapper className="mb-32">
        <div className="flex flex-row">
          <TeamMember
            imageSrc="/leif.jpg"
            imageAlt="Leif"
            name="Leif Nyvall"
            role="Manager & Mechanic"
            text="Test Test Test Test Test "
          />
          <TeamMember
            imageSrc="/glen.jpg"
            imageAlt="Glen"
            name="Glen Envik"
            role="Chassis Expert"
            text="Test Test Test Test Test "
          />
        </div>
      </Wrapper>
      <InstagramFeedSection className="mb-16" />
    </main>
  );
};

const TeamMember: React.FC<{
  imageSrc: string;
  imageAlt: string;
  name: string;
  role: string;
  text: string;
}> = (props) => {
  return (
    <div className="relative w-full">
      <Image
        src={props.imageSrc}
        width={200}
        height={200}
        alt={props.imageAlt}
        className=" mix-blend-lighten rounded-full w-36 h-36"
      />
      <div className="-mt-8 ml-20">
      <h3 className="text-fire uppercase font-black ml-6">{props.role}</h3>
        <h2 className="text-3xl font-black drop-shadow-fire mb-2">
          {props.name}
        </h2>
        <div>{props.text}</div>
      </div>
    </div>
  );
};

export default About;
