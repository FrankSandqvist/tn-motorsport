import * as contentful from "contentful";
import Image from "next/image";
import React from "react";

import { Hero } from "@/components/hero";
import { InstagramFeedSection } from "@/components/instagram-feed-section";
import { RichText } from "@/components/rich-text";
import { Wrapper } from "@/components/wrapper";
import { getLocalizedRichTextMap, getLocalizedTextMap } from "@/utils/get-texts";

const content = contentful.createClient({
  accessToken: process.env.CONTENTFUL_API_KEY!,
  space: "r8lurnfo6cag",
});

const About = async ({ params }: any) => {
  const lang = params.lang as "en" | "fi" | "sv";

  const textMap = await getLocalizedTextMap(lang);
  const richTextMap = await getLocalizedRichTextMap(lang);

  return (
    <main className="">
      <Hero imageSrc="/about-hero.jpg" />
      <Wrapper overlap>
        <div className="mb-16 lg:mb-32">
          <h1 className="font-black text-xl mb-2 uppercase text-fire">
            Since 20XX
          </h1>
          <h2 className="font-black text-4xl">
            {textMap["4nSNk4pa6LsWIouNgXLs1S"]}
          </h2>
        </div>
        <div className="max-w-4xl mb-64 leading-relaxed">
          <RichText
            className="mb-8"
            doc={richTextMap["5iMfoSTR47BWT7cU3PR1N0"]}
          />
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
            <h3 className="text-fire uppercase font-black">
              {textMap["1sqS1l3GeFGTOxUsGRiqjv"]}
            </h3>
            <h2 className="text-4xl font-black drop-shadow-fire mb-6">
              Tommi Nyvall
            </h2>
            <div>
              <RichText doc={richTextMap["5tKcZhmSpOrbK9OCJhXqQS"]} />
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
            role={textMap["2iJW4Z6gXZP82veMSLQBj2"]}
          >
            <RichText doc={richTextMap["2Bkz203SwU1wThdcRlIauq"]} />
          </TeamMember>
          <TeamMember
            imageSrc="/glen.jpg"
            imageAlt="Glen"
            name="Glen Envik"
            role={textMap["398tYe9A7iP07FbFMr1H0L"]}
          >
            <RichText doc={richTextMap["3S5dZ4kHHiFGM2Fmwhx0yR"]} />
          </TeamMember>
        </div>
      </Wrapper>
      <InstagramFeedSection textMap={textMap} className="mb-16" />
    </main>
  );
};

const TeamMember: React.FC<{
  imageSrc: string;
  imageAlt: string;
  name: string;
  role: string;
  children: any;
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
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default About;
