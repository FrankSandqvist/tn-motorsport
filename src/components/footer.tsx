import Image from "next/image";

import { getLocalizedTextMap } from "@/utils/get-texts";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Wrapper } from "./wrapper";

// Apply font scaling globally to size (based on viewport)

export const Footer: React.FC<{
  lang: "fi" | "en" | "sv";
  textMap: Record<string, string>;
}> = (props) => {
  return (
    <footer className="relative min-h-[90vh] overflow-hidden">
      <div
        className="absolute left-0 top-0 right-0 bottom-0 bg-right bg-cover md:bg-fixed"
        style={{ backgroundImage: 'url("/footer-bg.jpg")' }}
      ></div>
      <div className="h-[13vh] from-tyre to-transparent bg-gradient-to-b mix-blend-darken">
        <Wrapper>
          <h2 className="font-black text-white text-4xl lg:text-6xl mb-16">
            {props.textMap["6BgUDnm2lrv4KIT692i303"]}
          </h2>
        </Wrapper>
      </div>
      <Wrapper className="mt-4">
        <div className="w-full flex flex-col gap-4 -mt-[6vh] mb-8 lg:mb-16 lg:flex-row">
          <div className="flex-grow">
            T.N Motorsport Service Öb
            <br />
            Glasbruksvägen 80
            <br />
            66950 Munsala
          </div>
          <div className="flex-grow">
            Tommi Nyvall
            <br />
            <a href="tel:+358 40 96 04 227">+358 40 96 04 227</a>
            <br />
            <a href="mailto:tn.motorsport93@gmail.com">
              tn.motorsport93@gmail.com
            </a>
          </div>
          <div className="flex-grow">
            Leif Nyvall
            <br />
            <a href="tel:+358 40 96 03 415">+358 40 96 03 415</a>
          </div>
        </div>
        <form
          method="POST"
          action={process.env.HEADLESSFORMS_ACTION_URL}
          className="flex flex-col gap-4 text-xs pb-8 sm:text-sm md:text-lg lg:w-1/2"
        >
          <input type="hidden" name="tn" value="tn.motorsport93@gmail.com" />
          <FormElementContainer>
            <FormElementLabel for="name">
              {props.textMap["4pRzicNNsbkPkudW94o5jp"]}
            </FormElementLabel>
            <FormElementInput
              type="text"
              name="name"
              placeholder="Mika Häkkinen"
            />
          </FormElementContainer>
          <FormElementContainer>
            <FormElementLabel for="phone_number">
              {props.textMap["54tRDktKPgtixMr3dd7kFs"]}
            </FormElementLabel>
            <FormElementInput
              type="text"
              name="phone_number"
              placeholder="+358"
            />
          </FormElementContainer>
          <FormElementContainer>
            <FormElementLabel for="email">
              {props.textMap["2IQacF6ftq6dHJ2FXKxp5E"]}
            </FormElementLabel>
            <FormElementInput
              type="email"
              name="email"
              placeholder="mika.hakkinen@f1.com"
            />
          </FormElementContainer>
          <FormElementContainer>
            <FormElementLabel for="message">
              {props.textMap["2iRTGL8QZcrx5jYw0skg1i"]}
            </FormElementLabel>
            <textarea
              name="message"
              placeholder="Tommi, let's drive."
              className="bg-transparent placeholder:text-[#fff3] outline-fire px-4 py-4 transition-all duration-300 focus:drop-shadow-fire"
            ></textarea>
          </FormElementContainer>
          <button
            type="submit"
            className="uppercase font-black flex flex-row items-center justify-center p-4 border border-transparent duration-300 transition-all hover:drop-shadow-fire hover:border-fire border-b-fire"
          >
            <FontAwesomeIcon icon={faPaperPlane} className="mr-4 text-xl" />
            {props.textMap["3pPnyiah7oZAhC39DYTzNW"]}
          </button>
        </form>
      </Wrapper>
      <div className="absolute mix-blend-multiply opacity-50  w-[60vh] h-[60vh] right-40 bottom-24 hidden lg:block">
        <Image
          src="/footer-helmet-shadow.jpg"
          quality={90}
          fill
          alt="Helmet"
          className="object-contain"
        />
      </div>
      <div className="absolute mix-blend-lighten w-[60vh] h-[60vh] right-40 bottom-24 hidden lg:block">
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

const FormElementContainer: React.FC<{ children: any }> = (props) => {
  return (
    <div className="flex flex-col bg-[#0003] backdrop-blur-md border-b border-fire">
      {props.children}
    </div>
  );
};

const FormElementLabel: React.FC<{ for: string; children: any }> = (props) => {
  return (
    <label htmlFor={props.for} className="text-sm my-2 mx-4">
      {props.children}
    </label>
  );
};

const FormElementInput: React.FC<{
  type: string;
  name: string;
  placeholder: string;
}> = (props) => {
  return (
    <input
      type={props.type}
      name={props.name}
      className="bg-transparent placeholder:text-[#fff3] outline-fire px-4 py-2 transition-all duration-300 focus:drop-shadow-fire lg:py-4"
      placeholder={props.placeholder}
    ></input>
  );
};
