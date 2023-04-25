import Image from "next/image";

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Wrapper } from "./wrapper";

export const Footer: React.FC<{
  lang: "fi" | "en" | "sv";
}> = () => {
  return (
    <footer className="relative h-[90vh] overflow-hidden">
      <div
        className="absolute left-0 top-0 right-0 bottom-0 bg-right bg-cover bg-fixed"
        style={{ backgroundImage: 'url("/footer-bg.jpg")' }}
      ></div>
      <div className="h-[13vh] from-tyre to-transparent bg-gradient-to-b mix-blend-darken">
        <Wrapper>
          <h2 className="font-black text-white text-6xl mb-16">Let's drive.</h2>
        </Wrapper>
      </div>
      <Wrapper className="mt-4">
        <div className="w-full flex flex-col items-end mb-16 lg:flex-row">
          <div className="flex-grow">
            T.N Motorsport Service Öb
            <br />
            Glasbruksvägen 80
            <br />
            66950 Munsala
          </div>
          <div className="flex-grow">
            Leif Nyvall
            <br />
            +358 40 96 03 415
          </div>
          <div className="flex-grow">
            Tommi Nyvall
            <br />
            +358 40 96 04 227
          </div>
        </div>
        <form
          method="POST"
          action={process.env.HEADLESSFORMS_ACTION_URL}
          className="flex flex-col w-1/2 gap-4"
        >
          <input type="hidden" name="tn" value="tn.motorsport93@gmail.com" />
          <FormElementContainer>
            <FormElementLabel for="name">Name</FormElementLabel>
            <FormElementInput
              type="text"
              name="name"
              placeholder="Mika Häkkinen"
            />
          </FormElementContainer>
          <FormElementContainer>
            <FormElementLabel for="phone_number">Phone number</FormElementLabel>
            <FormElementInput
              type="text"
              name="phone_number"
              placeholder="+358"
            />
          </FormElementContainer>
          <FormElementContainer>
            <FormElementLabel for="email">Email</FormElementLabel>
            <FormElementInput
              type="email"
              name="email"
              placeholder="mika.hakkinen@f1.com"
            />
          </FormElementContainer>
          <FormElementContainer>
            <FormElementLabel for="message">Message</FormElementLabel>
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
            Submit
          </button>
        </form>
      </Wrapper>
      <div className="absolute mix-blend-multiply opacity-50 w-[50vw] h-[50vw] right-10 bottom-10 lg:w-[60vh] lg:h-[60vh] lg:right-40 lg:bottom-24">
        <Image
          src="/footer-helmet-shadow.jpg"
          quality={90}
          fill
          alt="Helmet"
          className="object-contain"
        />
      </div>
      <div className="absolute mix-blend-lighten w-[50vw] h-[50vw] right-10 bottom-10 lg:w-[60vh] lg:h-[60vh] lg:right-40 lg:bottom-24">
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
    <div className="flex flex-col bg-[#0003] backdrop-blur-md rounded-sm border-b border-fire">
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
      className="bg-transparent placeholder:text-[#fff3] outline-fire px-4 py-4 transition-all duration-300 focus:drop-shadow-fire"
      placeholder={props.placeholder}
    ></input>
  );
};
