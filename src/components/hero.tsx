import Image from "next/image";

export const Footer: React.FC<{
  imageSrc?: string;
  videoSrc?: string;
}> = (props) => {
  return (
    <footer
      className="relative h-[110vh] bg-cover bg-fixed mb-32"
      style={{
        backgroundImage: 'url("/footer-bg.jpg")',
        backgroundPosition: "right bottom",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-[10vh] from-tyre to-transparent bg-gradient-to-b"></div>
      <div className="absolute w-[60vh] h-[60vh] right-40 bottom-24 mix-blend-multiply opacity-50">
        <Image
          src="/footer-helmet-shadow.jpg"
          quality={90}
          fill
          alt="Helmet"
          className="object-contain"
        />
      </div>
      <div className="absolute w-[60vh] h-[60vh] right-40 bottom-24 mix-blend-lighten">
        <Image
          src="/footer-helmet.jpg"
          quality={90}
          fill
          alt="Helmet"
          className="object-contain"
        />
      </div>
    </footer>
  );
};
