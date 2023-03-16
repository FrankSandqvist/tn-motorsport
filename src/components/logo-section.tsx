import * as contentful from "contentful";
import Image from "next/image";
import { cache } from "react";

const content = contentful.createClient({
  accessToken: process.env.CONTENTFUL_API_KEY!,
  space: "r8lurnfo6cag",
});

const getSponsors = cache(() =>
  content.getEntries<{
    name: string;
    logo: { fields: { file: { url: string } } };
  }>({
    content_type: "sponsor",
  })
);

export const LogoSection = async () => {
  const sponsors = await getSponsors();

  return (
    <div className="h-64 grid grid-cols-3  bg-tyre">
      {sponsors.items.map((i) => (
        <div className="relative w-64 h-64 invert grayscale mix-blend-screen" key={i.fields.name}>
          <Image
            src={`https:${i.fields.logo.fields.file.url}`}
            alt={i.fields.name}
            fill
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
};
