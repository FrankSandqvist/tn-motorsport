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

export const RichText: React.FC<{
  doc: ContentfulRichTextDocument;
  className?: string;
  ultra?: boolean;
}> = (props) => {
  return (
    <div>
      {props.doc.content.map((t, i) => (
        <p className={`${props.className ?? ``}`} key={i}>
          {t.content.map((c) => (
            <span
              key={c.value}
              className={`${
                c.marks.some((m) => m.type === "bold")
                  ? `font-black ${props.ultra ? `text-ultra` : `text-fire`}`
                  : ``
              }`}
            >
              {c.value}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
};
