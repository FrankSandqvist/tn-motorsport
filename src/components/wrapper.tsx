export const Wrapper: React.FC<{
  overlap?: true;
  children: any;
  className?: string;
}> = (props) => {
  return (
    <div
      className={`relative max-w-6xl mr-auto ml-auto px-8lg:py-16 2xl:px-0 ${
        props.overlap ? `z-10 -mt-[40vh]` : ``
      } ${props.className ?? ``}`}
    >
      {props.children}
    </div>
  );
};
