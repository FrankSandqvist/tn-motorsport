import * as contentful from "contentful";
import Image from "next/image";
import { cache } from "react";

import { Wrapper } from "./wrapper";

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
    <Wrapper className="mb-16">
      <div className="grid grid-cols-3 bg-tyre">
        {sponsors.items.map((i) => (
          <div
            className="relative w-64 h-32 p-8 rounded-md invert grayscale mix-blend-screen duration-300 transition-all from-90% from-white to-fire hover:mix-blend-normal hover:filter-none hover:bg-gradient-to-b hover:drop-shadow-fire hover:scale-110"
            key={i.fields.name}
          >
            <Image
              src={`https:${i.fields.logo.fields.file.url}`}
              alt={i.fields.name}
              fill
              className="object-contain scale-75"
            />
          </div>
        ))}
      </div>
    </Wrapper>
  );
};
