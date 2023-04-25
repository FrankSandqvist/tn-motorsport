"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navbar: React.FC<{
  lang: "fi" | "en" | "sv";
}> = (props) => {
  const pathname = usePathname();

  const [showNavbar, setShownavbar] = useState(false);
  const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false);

  const handleScrolled = () => {
    setShownavbar(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrolled);
    return () => {
      window.removeEventListener("scroll", handleScrolled);
    };
  }, []);

  return (
    <nav
      className={`flex fixed flex-col items-stretch ${
        showNavbar ? "bg-tyre-transp backdrop-blur-lg" : ""
      } transition-all duration-300 w-full items-center px-8 z-50 lg:flex-row lg:items-center`}
    >
      <div className="h-16 flex flex-row items-center flex-grow">
        <div
          className={`font-black text-2xl pr-4 flex-grow transition-all duration-300 ${
            mobileNavbarOpen || showNavbar
              ? `opacity-100 blur-none`
              : `opacity-0 blur-sm`
          }`}
        >
          TN MOTORSPORT
        </div>
        <div className="text-xl lg:hidden">
          <FontAwesomeIcon
            icon={mobileNavbarOpen ? faTimes : faBars}
            onClick={() => setMobileNavbarOpen((m) => !m)}
          />
        </div>
      </div>
      <div
        className={`${
          mobileNavbarOpen ? `flex` : `hidden`
        } flex-col lg:flex lg:flex-row`}
      >
        <div className="flex flex-col gap-4 text-2xl lg:px-4 lg:text-sm lg:flex-row">
          <Link
            href="/"
            className={`${
              pathname === `/${props.lang}` ? `text-fire` : ``
            }`}
          >
            TN Experience
          </Link>
          <div className="h-px bg-white opacity-30 lg:h-auto lg:w-px" />
          <Link
            href={`/${props.lang}/about`}
            className={`${
              pathname === `/${props.lang}/about` ? `text-fire` : ``
            }`}
          >
            About the team
          </Link>
          <div className="h-px bg-white opacity-30 lg:h-auto lg:w-px" />
          <Link
            href={`/${props.lang}/rankings`}
            className={`${
              pathname === `/${props.lang}/rankings` ? `text-fire` : ``
            }`}
          >
            Rankings
          </Link>
          <div className="h-px bg-white opacity-30 lg:h-auto lg:w-px" />
        </div>
        <div className="flex gap-4 py-4 flex-col lg:flex-row lg:py-0">
          {props.lang !== "fi" && (
            <div className="flex gap-4">
              <Image
                className="rounded-sm"
                src="/fi.svg"
                width="30"
                height="10"
                alt="Suomeksi"
              />
              <span className="lg:hidden">Suomeksi</span>
            </div>
          )}
          {props.lang !== "sv" && (
            <div className="flex gap-4">
              <Image
                className="rounded-sm"
                src="/se.svg"
                width="30"
                height="10"
                alt="Svenska"
              />
              <span className="lg:hidden">Svenska</span>
            </div>
          )}
          {props.lang !== "en" && (
            <div className="flex gap-4">
              <Image
                className="rounded-sm"
                src="/gb.svg"
                width="30"
                height="10"
                alt="English"
              />
              <span className="lg:hidden">English</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
