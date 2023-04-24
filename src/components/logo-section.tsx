import * as contentful from "contentful";
import Image from "next/image";
import { cache } from "react";

import { ButtonLink } from "./button-link";
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

export const LogoSection: React.FC<{ className?: string }> = async (props) => {
  const sponsors = await getSponsors();

  return (
    <Wrapper className={`${props.className ?? ``}`}>
      <h2 className="font-black text-4xl flex-grow mb-16">Our partners</h2>
      <div className="grid grid-cols-3 bg-tyre">
        {sponsors.items.map((i) => (
          <ButtonLink
            href=""
            className="relative w-64 h-32 border-b-transparent p-8 invert bg-white grayscale bg-transparent mix-blend-screen duration-300 transition-all hover:border-fire hover:filter-none hover:mix-blend-normal"
            key={i.fields.name}
          >
            <Image
              src={`https:${i.fields.logo.fields.file.url}`}
              alt={i.fields.name}
              fill
              className="object-contain scale-75"
            />
          </ButtonLink>
        ))}
      </div>
    </Wrapper>
  );
};
