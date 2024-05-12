import Image from "next/image";

export const Hero: React.FC<{
  imageSrc?: string;
  landscapeVideoSrc?: string;
  portraitVideoSrc?: string;
}> = (props) => {
  return (
    <div className="relative w-full h-screen">
      {props.landscapeVideoSrc && (
        <video
          autoPlay
          playsInline
          muted
          loop
          className="absolute object-cover w-full h-full hidden lg:block"
        >
          <source src={props.landscapeVideoSrc} type="video/mp4" />
        </video>
      )}
      {props.portraitVideoSrc && (
        <video
          autoPlay
          playsInline
          muted
          loop
          className="absolute object-cover w-full h-full block lg:hidden"
        >
          <source src={props.portraitVideoSrc} type="video/mp4" />
        </video>
      )}
      {props.imageSrc && (
        <Image
          src={props.imageSrc}
          fill
          className="object-cover"
          alt="Rankings"
        />
      )}
      <div className="absolute bottom-0 bg-gradient-to-t from-tyre to-transparent h-[30vh] w-full" />
    </div>
  );
};
