import Image from "next/image";

import { ButtonLink } from "./button-link";
import { Wrapper } from "./wrapper";

export const InstagramFeedSection: React.FC<{
  className?: string;
  textMap: Record<string, string>;
}> = (props) => {
  return (
    <div className={props.className}>
      <Wrapper className="flex flex-col mb-8 justify-stretch lg:flex-row">
        <h2 className="font-black text-xl flex-grow mb-8 md:text-2xl lg:mb-0 lg:text-4xl">
          {props.textMap["5ojOZTkwiPDxtP2nm4ECev"]}
        </h2>
        <div className="flex flex-col gap-4 md:flex-row">
        <ButtonLink
            href="https://www.youtube.com/@TommiNyvall"
            className="flex flex-row gap-2 items-center p-2 flex-grow lg:flex-auto"
          >
            <Image
              src="/youtube.svg"
              width={30}
              height={30}
              alt="Youtube"
              className=""
            />
            YouTube
          </ButtonLink>
          <ButtonLink
            href="https://www.facebook.com/TNmotorsport62/"
            className="flex flex-row gap-2 items-center p-2 flex-grow lg:flex-auto"
          >
            <Image
              src="/facebook.svg"
              width={30}
              height={30}
              alt="Facebook"
              className=""
            />
            FB
          </ButtonLink>
          <ButtonLink
            href="https://www.instagram.com/tomminyvall/"
            className="flex flex-row gap-2 items-center p-2 flex-grow lg:flex-auto"
          >
            <Image
              src="/instagram.svg"
              width={30}
              height={30}
              alt="Instagram"
              className=""
            />
            IG
          </ButtonLink>
        </div>
      </Wrapper>
      <div className="relative w-full h-96 ml-0 md:ml-8 md:w-[calc(100%-4rem)]">
        <iframe
          src="https://widget.tagembed.com/149754"
          className="absolute w-full h-full mix-blend-screen"
        />
        <div className="hidden absolute bg-gradient-to-r from-tyre from-30% to-transparent left-0 top-0 bottom-0 w-6 pointer-events-none md:block"></div>
        <div className="hidden absolute bg-gradient-to-l from-tyre from-30% to-transparent right-0 top-0 bottom-0 w-6 pointer-events-none md:block"></div>
      </div>
    </div>
  );
};
