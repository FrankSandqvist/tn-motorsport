import Image from "next/image";
import { Suspense } from "react";

import { ContactForm } from "./contact-form";
import { Wrapper } from "./wrapper";

export const Footer: React.FC<{
  lang: "fi" | "en" | "sv";
  textMap: Record<string, string>;
  initialFormContent?: string;
}> = (props) => {
  return (
    <footer className="relative min-h-[90vh] overflow-hidden">
      <Image
        src="/footer-bg.jpg"
        className="absolute left-0 top-0 right-0 bottom-0 md:bg-fixed object-cover object-right"
        fill
        alt="Footer"
      />
      <div className="h-[13vh] from-tyre to-transparent bg-gradient-to-b mix-blend-darken">
        <Wrapper>
          <h2 className="font-black text-white text-4xl lg:text-6xl mb-16">
            {props.textMap["6BgUDnm2lrv4KIT692i303"]}
          </h2>
        </Wrapper>
      </div>
      <Wrapper className="mt-4">
        <div className="w-full flex flex-col gap-4 -mt-[6vh] mb-8 drop-shadow-md lg:mb-16 lg:flex-row">
          <div className="flex-grow">
            T.N Motorsport Service Öb
            <br />
            Glasbruksvägen 80
            <br />
            66950 Munsala
          </div>
          <div className="flex-grow">
            Tommi Nyvall{" "}
            <span className="inline-flex gap-1">
              <Image
                className="rounded-sm"
                src="/se.svg"
                width="20"
                height="15"
                alt="Svenska"
              />
              <Image
                className="rounded-sm"
                src="/fi.svg"
                width="20"
                height="15"
                alt="Suomi"
              />
              <Image
                className="rounded-sm"
                src="/gb.svg"
                width="20"
                height="15"
                alt="English"
              />
            </span>
            <br />
            <a href="tel:+358 40 96 04 227">+358 40 96 04 227</a>
            <br />
            <a href="mailto:tn.motorsport93@gmail.com">
              tn.motorsport93@gmail.com
            </a>
          </div>
          <div className="flex-grow">
            Leif Nyvall{" "}
            <span className="inline-flex gap-1">
              <Image
                className="rounded-sm"
                src="/se.svg"
                width="20"
                height="15"
                alt="Svenska"
              />
              <Image
                className="rounded-sm"
                src="/gb.svg"
                width="20"
                height="15"
                alt="English"
              />
            </span>
            <br />
            <a href="tel:+358 40 96 03 415">+358 40 96 03 415</a>
          </div>
        </div>
        <a id="contact-form" />
        <Suspense>
          <ContactForm textMap={props.textMap} />
        </Suspense>
      </Wrapper>
      <div className="absolute mix-blend-multiply opacity-50 right-40 bottom-24 hidden lg:w-[30vh] lg:h-[30vh] xl:w-[50vh] xl:h-[50vh] lg:block">
        <Image
          src="/footer-helmet-shadow.jpg"
          quality={90}
          fill
          alt="Helmet"
          className="object-contain"
        />
      </div>
      <div className="absolute mix-blend-lighten right-40 bottom-24 hidden lg:w-[30vh] lg:h-[30vh] xl:w-[50vh] xl:h-[50vh] lg:block">
        <Image
          src="/footer-helmet.jpg"
          quality={90}
          fill
          alt="Helmet"
          className="object-contain"
        />
      </div>
    </footer>
  );
};
