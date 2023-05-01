"use client";

import { useSearchParams } from "next/navigation";
import {
    DetailedHTMLProps, FormEvent, InputHTMLAttributes, useEffect, useRef, useState
} from "react";

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button } from "./button";

export const ContactForm: React.FC<{
  textMap: Record<string, string>;
}> = (props) => {
  const params = useSearchParams();
  const [nameInput, setNameInput] = useState("");
  const [phoneNumberInput, setPhoneNumberInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccessfulPopup, setShowSuccessfulPopup] = useState(false);

  const formElement = useRef<HTMLFormElement | null>(null);

  const formPrefill = params.get("form-prefill");

  useEffect(() => {
    if (formPrefill) {
      const prefillText = {
        visibility: "I am interested in the visibility package.",
        experience: "I am interested in the driving experience.",
        exclusive: "I am interested in the exclusive package.",
      }[formPrefill];

      if (prefillText) {
        setMessageInput(prefillText);
        formElement.current?.scrollIntoView();
      }
    }
  }, [formPrefill]);

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    await fetch(
      "https://app.headlessforms.cloud/api/v1/form-submission/USnBcAMryz",
      {
        method: "POST",
        body: formData,
        redirect: "manual",
      }
    );

    setLoading(false);
    setShowSuccessfulPopup(true);

    setNameInput("");
    setPhoneNumberInput("");
    setEmailInput("");
    setMessageInput("");
  };

  return (
    <>
      {showSuccessfulPopup && (
        <div className="fixed left-0 top-0 right-0 bottom-0 z-10 bg-tyre-transp backdrop-blur-xl flex flex-col items-center justify-center gap-8 p-8 text-center">
          <p>Thank you for your message! We will be in touch soon.</p>
          <Button onClick={() => setShowSuccessfulPopup(false)}>Ok</Button>
        </div>
      )}
      <form
        className="flex flex-col gap-4 text-xs pb-8 sm:text-sm md:text-lg lg:w-1/2"
        onSubmit={handleSubmitForm}
        ref={formElement}
      >
        <FormElementContainer>
          <FormElementLabel>
            {props.textMap["4pRzicNNsbkPkudW94o5jp"]}
          </FormElementLabel>
          <FormElementInput
            type="text"
            name="name"
            placeholder="Mika Häkkinen"
            value={nameInput}
            required
            onChange={(e) => setNameInput(e.target.value)}
          />
        </FormElementContainer>
        <FormElementContainer>
          <FormElementLabel>
            {props.textMap["54tRDktKPgtixMr3dd7kFs"]}
          </FormElementLabel>
          <FormElementInput
            type="text"
            name="phone_number"
            placeholder="+358"
            value={phoneNumberInput}
            required
            onChange={(e) => setPhoneNumberInput(e.target.value)}
          />
        </FormElementContainer>
        <FormElementContainer>
          <FormElementLabel>
            {props.textMap["2IQacF6ftq6dHJ2FXKxp5E"]}
          </FormElementLabel>
          <FormElementInput
            type="email"
            name="email"
            placeholder="mika.hakkinen@f1.com"
            value={emailInput}
            required
            onChange={(e) => setEmailInput(e.target.value)}
          />
        </FormElementContainer>
        <FormElementContainer>
          <FormElementLabel>
            {props.textMap["2iRTGL8QZcrx5jYw0skg1i"]}
          </FormElementLabel>
          <textarea
            name="message"
            placeholder="Tommi, let's drive."
            className="bg-transparent placeholder:text-[#fff3] outline-fire px-4 py-4 transition-all duration-300 focus:drop-shadow-fire"
            value={messageInput}
            required
            onChange={(e) => setMessageInput(e.target.value)}
          ></textarea>
        </FormElementContainer>
        <input type="hidden" name="tn" value="tn.motorsport93@gmail.com" />
        <Button type="submit" disabled={loading}>
          <FontAwesomeIcon icon={faPaperPlane} className="mr-4 text-xl" />
          {loading ? "Loading..." : props.textMap["3pPnyiah7oZAhC39DYTzNW"]}
        </Button>
      </form>
    </>
  );
};

const FormElementContainer: React.FC<{ children: any }> = (props) => {
  return (
    <div className="flex flex-col bg-[#0003] backdrop-blur-md border-b border-fire">
      {props.children}
    </div>
  );
};

const FormElementLabel: React.FC<
  DetailedHTMLProps<InputHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>
> = (props) => {
  return (
    <label {...props} className="text-sm my-2 mx-4">
      {props.children}
    </label>
  );
};

const FormElementInput: React.FC<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = (props) => {
  return (
    <input
      {...props}
      className="bg-transparent placeholder:text-[#fff3] outline-fire px-4 py-2 transition-all duration-300 focus:drop-shadow-fire lg:py-4"
    ></input>
  );
};
