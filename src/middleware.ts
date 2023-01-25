import Negotiator from "negotiator";
import { NextMiddleware, NextRequest, NextResponse } from "next/server";

import { match } from "@formatjs/intl-localematcher";

const locales = ["en", "sv", "fi"];

const getLocale = (request: NextRequest) => {
  const languages = new Negotiator({
    headers: Object.fromEntries(request.headers.entries()),
  }).languages();
  const defaultLocale = "en-US";

  return match(languages, locales, defaultLocale);
};

export const middleware: NextMiddleware = (request) => {
console.log('wtf')

  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
  return NextResponse.next();
};

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
