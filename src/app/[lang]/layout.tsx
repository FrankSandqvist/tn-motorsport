import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { getLocalizedTextMap } from "@/utils/get-texts";

const PageLayout = async ({
  params,
  children,
}: {
  params: any;
  children: React.ReactNode;
}) => {
  const textMap = await getLocalizedTextMap(params.lang);

  return (
    <div className="text-xs sm:text-sm md:text-lg ">
      <Navbar lang={params.lang} textMap={textMap} />
      {children}
      <Footer lang={params.lang} textMap={textMap} />
    </div>
  );
};

export default PageLayout;
