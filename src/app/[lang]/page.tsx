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
        <div className="grid grid-cols-3 gap-8">
          <div className="border p-4 border-fire">
            <h2 className="text-xl font-black mb-4">Marketing package</h2>
            <ul className="marker:text-fire list-disc">
              <li className="mb-2">
                Logo on van & trailer, competition cars, team clothes,
                competition overalls and roll-up sign
              </li>
              <li className="mb-2">Marketing and visibility on social media</li>
              <li className="mb-2">Participation on company events and conferences</li>
              <li className="mb-2">Free entrance to all competitions in Finland and Sweden</li>
            </ul>
          </div>
          <div className="border p-4 border-fire">
            <h2 className="text-xl font-black">Driving package</h2>
          </div>
          <div className="border p-4 border-red-700">
            <h2 className="text-xl text-fire font-black">Exclusive package</h2>
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
            <div className="absolute w-full h-full bg-fire mix-blend-color"></div>
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

export default Home;
