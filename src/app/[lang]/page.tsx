import * as contentful from "contentful";
import { NextPage } from "next";
import Image from "next/image";

import { LogoSection } from "@/components/logo-section";

const content = contentful.createClient({
  accessToken: process.env.CONTENTFUL_API_KEY!,
  space: "r8lurnfo6cag",
});

const Home = async ({ params: { lang } }: any) => {
  const c = await content.getEntry("Vsm13bcTEsR3yLjFhFp7m");

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
            Rev up your company with our driving experiences.
          </h2>
        </div>
        <div className="max-w-4xl mb-32 leading-relaxed">
          <p className="mb-4">
            With our driving experiences, you can rev up your company and give
            your team an unforgettable day out on the track. Our team of
            professional drivers will teach you the skills and techniques needed
            to navigate our high-performance race cars around our challenging
            course, giving you a taste of what it's like to be a professional
            racing driver.
          </p>
          <p className="mb-4">
            Whether you're looking for team building activities, corporate
            entertainment, or simply a fun day out, our driving experiences are
            the perfect way to inject some excitement into your next event. So
            what are you waiting for? Get ready to accelerate your company's
            success with our unforgettable driving experiences.
          </p>
        </div>
        <div className="grid gap-12 grid-cols-1 lg:grid-cols-3 2xl:-mx-32">
          <div className="p-4 border-l border-b border-l-fire border-b-fire lg:-translate-y-8">
            <h2 className="text-3xl font-black mb-4 -ml-8 -mt-10">
              The Visibility
            </h2>
            <BulletPointContainer>
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
          </div>
          <div className="p-4 border-l border-b border-l-fire border-b-fire">
            <h2 className="text-3xl font-black mb-4 -ml-8 -mt-10">
              The Experience
            </h2>
            <BulletPointContainer>
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
          </div>
          <div className="p-4 border-l border-b border-l-red-700 border-b-red-700 lg:translate-y-8">
            <h2 className="text-3xl font-black mb-4 -ml-8 -mt-10">Or both?</h2>
            <BulletPointContainer>
              <BulletPoint red>
                <TextHilight red>Visibility and the experience</TextHilight> in
                one exclusive package.
              </BulletPoint>
            </BulletPointContainer>
          </div>
        </div>
        <div className="relative">
          <div className="absolute right-0 top-0 w-64 h-64">
            <Image
              src="/nissan.png"
              quality={20}
              alt="Nissan"
              className="absolute w-full h-full mix-blend-lighten"
              fill
            />
            <div className="absolute w-full h-full bg-fire mix-blend-color border-f"></div>
          </div>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
        </div>
        <div>
          {/* @ts-expect-error Server Component */}
          <LogoSection />
        </div>
      </div>
    </main>
  );
};

const TextHilight: React.FC<{
  children: any;
  red?: boolean;
}> = (props) => {
  return (
    <span className={`font-black ${props.red ? `text-red-700` : `text-fire`}`}>
      {props.children}
    </span>
  );
};

const BulletPointContainer: React.FC<{
  children: any;
}> = (props) => {
  return <div className="-ml-5 text-sm">{props.children}</div>;
};

const BulletPoint: React.FC<{
  children: any;
  red?: boolean;
}> = (props) => {
  return (
    <div
      className={`border-l-4 ${
        props.red ? `border-red-700` : `border-fire`
      } pl-2 mb-4`}
    >
      {props.children}
    </div>
  );
};

export default Home;
