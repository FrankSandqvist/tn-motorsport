import * as contentful from "contentful";

const content = contentful.createClient({
  accessToken: process.env.CONTENTFUL_API_KEY!,
  space: "r8lurnfo6cag",
});

export interface ContentfulRichTextDocument {
  content: Array<{
    nodeType: "paragraph";
    content: Array<{
      nodeType: "text";
      value: string;
      marks: Array<{ type: "bold" }>;
    }>;
  }>;
  className?: string;
  ultra?: boolean;
}

export const getLocalizedTextMap = async (lang: "en" | "sv" | "fi") => {
  const texts = await content.getEntries<{
    english: string;
    finnish: string;
    swedish: string;
  }>({
    content_type: "text",
  });

  const textMap: Record<string, string> = texts.items.reduce(
    (acc, t) => ({
      ...acc,
      [t.sys.id]: {
        en: t.fields.english,
        fi: t.fields.finnish,
        sv: t.fields.swedish,
      }[lang],
    }),
    {}
  );

  return textMap;
};

export const getLocalizedRichTextMap = async (lang: "en" | "sv" | "fi") => {
  const richTexts = await content.getEntries<{
    english: string;
    finnish: string;
    swedish: string;
  }>({
    content_type: "richText",
  });

  const richTextMap: Record<string, ContentfulRichTextDocument> =
    richTexts.items.reduce(
      (acc, t) => ({
        ...acc,
        [t.sys.id]: {
          en: t.fields.english,
          fi: t.fields.finnish,
          sv: t.fields.swedish,
        }[lang],
      }),
      {}
    );

  return richTextMap;
};
