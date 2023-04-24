import Image from "next/image";

import { Wrapper } from "./wrapper";

export const InstagramFeedSection: React.FC<{ className?: string }> = (
  props
) => {
  return (
    <div className={props.className}>
      <Wrapper className="flex flex-row">
        <h2 className="font-black text-4xl mb-8 flex-grow">Keep up to date</h2>
        <div className="flex flex-row gap-8">
          <div  className="flex flex-row gap-2 items-center hover:cursor-pointer hover:text-fire">
            <Image src="/facebook.svg" width={30} height={30} alt="Facebook" className="" />
            TN Motorsport
          </div>
          <div  className="flex flex-row gap-2 items-center">
            <Image src="/instagram.svg" width={30} height={30} alt="Instagram" className="" />
            @tomminyvall
          </div>
        </div>
      </Wrapper>
      <div className="relative w-full h-96 ml-0 md:ml-8 md:w-[calc(100%-4rem)]">
        <iframe
          src="https://widget.tagembed.com/97679"
          className="absolute w-full h-full mix-blend-screen"
        />
        <div className="hidden absolute bg-gradient-to-r from-tyre from-30% to-transparent left-0 top-0 bottom-0 w-6 pointer-events-none md:block"></div>
        <div className="hidden absolute bg-gradient-to-l from-tyre from-30% to-transparent right-0 top-0 bottom-0 w-6 pointer-events-none md:block"></div>
      </div>
    </div>
  );
};
