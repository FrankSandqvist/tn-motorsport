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
    website: string;
  }>({
    content_type: "sponsor",
  })
);

//@ts-ignore
export const LogoSection: React.FC<{ className?: string }> = async (props) => {
  const sponsors = await getSponsors();

  return (
    <Wrapper className={`${props.className ?? ``}`}>
      <h2 className="font-black text-4xl flex-grow mb-16">Our partners</h2>
      <div className="grid grid-cols-2 bg-tyre xl:-ml-32 lg:grid-cols-3 xl:grid-cols-4 xl:-mr-32">
        {sponsors.items.map((i) => (
          <ButtonLink
            href={i.fields.website ?? "#"}
            className="relative h-32 border-b-transparent border-2 p-8 invert bg-white grayscale bg-transparent mix-blend-screen duration-300 transition-all contrast-[4] brightness-[0.7] hover:border-fire hover:filter-none hover:mix-blend-normal"
            key={i.fields.name}
          >
            {i.fields.logo ? <Image
              src={`https:${i.fields.logo.fields.file.url}`}
              alt={i.fields.name}
              fill
              className="object-contain scale-[0.6]"
            /> : <p className="text-xl text-black text-center">{i.fields.name}</p>}
          </ButtonLink>
        ))}
      </div>
    </Wrapper>
  );
};
