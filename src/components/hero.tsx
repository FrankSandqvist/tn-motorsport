import Image from "next/image";

export const Hero: React.FC<{
  imageSrc?: string;
  videoSrc?: string;
}> = (props) => {
  return (
    <div className="relative w-full h-screen">
      {props.videoSrc && (
        <video
          autoPlay
          muted
          loop
          className="absolute object-cover w-full h-full"
        >
          <source src={props.videoSrc} type="video/mp4" />
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
