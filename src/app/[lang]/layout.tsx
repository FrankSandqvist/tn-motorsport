import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { getLocalizedTextMap } from "@/utils/get-texts";

const PageLayout = async ({
  params,
  searchParams,
  children,
}: {
  params: any;
  searchParams: any,
  children: React.ReactNode;
}) => {
  const textMap = await getLocalizedTextMap(params.lang);

  return (
    <div className="text-xs sm:text-sm">
      <Navbar lang={params.lang} textMap={textMap} />
      {children}
      <Footer lang={params.lang} initialFormContent={searchParams?.form} textMap={textMap} />
    </div>
  );
};

export default PageLayout;
