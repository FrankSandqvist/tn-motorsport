import * as contentful from "contentful";
import React from "react";

import { Hero } from "@/components/hero";
import { InstagramFeedSection } from "@/components/instagram-feed-section";
import { LogoSection } from "@/components/logo-section";
import { Wrapper } from "@/components/wrapper";
import { getLocalizedTextMap } from "@/utils/get-texts";

export const generateStaticParams = () => [
  { lang: "sv" },
  { lang: "fi" },
  { lang: "en" },
];

const content = contentful.createClient({
  accessToken: process.env.CONTENTFUL_API_KEY!,
  space: "r8lurnfo6cag",
});

const About = async ({ params }: any) => {
  const lang = params.lang as "en" | "fi" | "sv";

  const textMap = await getLocalizedTextMap(lang);

  const competitionResults = await content.getEntries<{
    competition: string;
    position: number;
    year: number;
  }>({
    content_type: "competitionResult",
  });

  const competitionResultYears = competitionResults.items
  .sort((a, b) => a.fields.position - b.fields.position)
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
            {textMap["4g7iFIZ5QeXlD9MBwhfome"]}
          </h1>
          <h2 className="font-black text-4xl">
            {textMap["2IbKWJEG0EnE3ImEryGahg"]}
          </h2>
        </div>
        {competitionResultYears.map(([year, results]) => (
          <div key={year} className="mb-8 w-full max-w-lg flex flex-col">
            <h3 className="font-black text-xl text-fire mb-4">{year}</h3>
            {results.map((r) => (
              <div key={r.competition} className={`flex justify-stretch mb-2 ${r.position === 1 ? `text-[110%] drop-shadow-fire mb-3`: ``}`}>
                <div className="flex-grow">{r.competition}</div>
                <div className={r.position === 1 ? "text-amber-300" : r.position === 2 ? "text-gray-300" : r.position === 3 ? "text-yellow-500" : ""}>{r.position}</div>
              </div>
            ))}
          </div>
        ))}
      </Wrapper>
      <InstagramFeedSection textMap={textMap} className="mb-32" />
      <LogoSection textMap={textMap} className="mb-64" />
    </main>
  );
};

export const generateMetadata = async ({ params }: { params: any }) => {
  const lang = params.lang as "en" | "fi" | "sv";
  const textMap = await getLocalizedTextMap(lang);
  return {
    title: `${textMap["4g7iFIZ5QeXlD9MBwhfome"]} | ${textMap["2IbKWJEG0EnE3ImEryGahg"]}`,
  };
};

export default About;
