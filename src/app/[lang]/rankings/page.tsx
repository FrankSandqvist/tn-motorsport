import * as contentful from "contentful";
import Image from "next/image";
import React from "react";

import { Hero } from "@/components/hero";
import { InstagramFeedSection } from "@/components/instagram-feed-section";
import { LogoSection } from "@/components/logo-section";
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

  const competitionResults = await content.getEntries<{
    competition: string;
    position: number;
    year: number;
  }>({
    content_type: "competitionResult",
  });

  const competitionResultYears = competitionResults.items
    .sort((a, b) => b.fields.year - a.fields.year)
    .reduce<
      Array<
        [
          number,
          Array<{
            competition: string;
            position: number;
          }>
        ]
      >
    >((acc, r) => {
      if (acc[acc.length - 1]?.[0] !== r.fields.year) {
        acc.push([r.fields.year, [r.fields]]);
      } else {
        acc[acc.length - 1][1].push(r.fields);
      }
      return acc;
    }, []);

  return (
    <main className="">
      <Hero imageSrc="/rankings-hero.jpg" />
      <Wrapper overlap className="mb-32">
        <div className="mb-16 lg:mb-32">
          <h1 className="font-black text-xl mb-2 uppercase text-fire">
            TN MOTORSPORT
          </h1>
          <h2 className="font-black text-4xl">Competition Rankings</h2>
        </div>
        {competitionResultYears.map(([year, results]) => (
          <div key={year} className="mb-8 w-full max-w-lg flex flex-col">
            <h3 className="font-black text-xl text-fire mb-4">{year}</h3>
            {results.map((r) => (
              <div key={r.competition} className="flex justify-stretch mb-2">
                <div className="flex-grow">{r.competition}</div>
                <div>{r.position}</div>
              </div>
            ))}
          </div>
        ))}
      </Wrapper>
      <InstagramFeedSection className="mb-32" />
      <LogoSection className="mb-64" />
    </main>
  );
};

export default About;
