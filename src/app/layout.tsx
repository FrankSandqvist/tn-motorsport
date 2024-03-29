import "./output.css";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.cdnfonts.com/css/monument-extended"
        />
      </head>
      <body className="bg-tyre text-white">{children}</body>
    </html>
  );
}
