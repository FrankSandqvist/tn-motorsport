"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navbar: React.FC<{
  lang: "fi" | "en" | "sv";
  textMap: Record<string, string>;
}> = (props) => {
  const pathname = usePathname();
  const pathnameParts = pathname.split("/");
  const page = pathnameParts.length === 2 ? "" : pathnameParts.pop();

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
        mobileNavbarOpen || showNavbar ? "bg-tyre-transp backdrop-blur-lg" : ""
      } transition-all duration-300 w-full items-center px-8 z-50 lg:flex-row lg:items-center`}
    >
      <div className="h-16 flex flex-row items-center flex-grow">
        <div
          className={`font-black text-xl pr-4 flex-grow transition-all duration-300 md:text-2xl ${
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
          <Link href="/" className={`${page === "" ? `text-fire` : ``}`}>
            {props.textMap["11hCKGngwjrpGFh8oyrFoA"]}
          </Link>
          <div className="h-px bg-white opacity-30 lg:h-auto lg:w-px" />
          <Link
            href={`/${props.lang}/about`}
            className={`${page === "about" ? `text-fire` : ``}`}
          >
            {props.textMap["4OyFrpd3dju2iV7L4nH7ZP"]}
          </Link>
          <div className="h-px bg-white opacity-30 lg:h-auto lg:w-px" />
          <Link
            href={`/${props.lang}/rankings`}
            className={`${page === "rankings" ? `text-fire` : ``}`}
          >
            {props.textMap["1LzbPDhcE1gAxrCixGpG6D"]}
          </Link>
          <div className="h-px bg-white opacity-30 lg:h-auto lg:w-px" />
        </div>
        <div className="flex gap-4 py-4 flex-col lg:flex-row lg:py-0">
          {/*props.lang !== "fi" && (
            <Link href={`/fi/${page}`} className="flex gap-4">
              <Image
                className="rounded-sm"
                src="/fi.svg"
                width="30"
                height="10"
                alt="Suomeksi"
              />
              <span className="lg:hidden">Suomeksi</span>
            </Link>
          )*/}
          {props.lang !== "sv" && (
            <Link href={`/sv/${page}`} className="flex gap-4">
              <Image
                className="rounded-sm"
                src="/se.svg"
                width="30"
                height="10"
                alt="Svenska"
              />
              <span className="lg:hidden">Svenska</span>
            </Link>
          )}
          {props.lang !== "en" && (
            <Link href={`/en/${page}`} className="flex gap-4">
              <Image
                className="rounded-sm"
                src="/gb.svg"
                width="30"
                height="10"
                alt="English"
              />
              <span className="lg:hidden">English</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
