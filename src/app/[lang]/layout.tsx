"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const [showNavbar, setShownavbar] = useState(false);

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
    <>
      <nav
        className={`flex fixed ${
          showNavbar ? "bg-tyre-transp backdrop-blur-lg" : ""
        } transition-all duration-300 h-16 w-full items-center px-8 z-10`}
      >
        <div
          className={`font-black text-2xl pr-4 flex-grow transition-all duration-300 ${
            showNavbar ? `opacity-100 blur-none` : `opacity-0 blur-sm`
          }`}
        >
          TN MOTORSPORT
        </div>
        <div className="flex px-4">
          <Link href="" className="mr-6 text-fire">
            TN Experience
          </Link>
          <div className="mr-6 border-r border-white opacity-30" />
          <Link href="" className="">
            About the team
          </Link>
        </div>
      </nav>
      {children}
    </>
  );
};

export default PageLayout;
