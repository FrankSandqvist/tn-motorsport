import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

const PageLayout = ({
  params,
  children,
}: {
  params: any;
  children: React.ReactNode;
}) => {
  return (
    <>
      <Navbar lang={params.lang} />
      {children}
      <Footer lang={params.lang} />
    </>
  );
};

export default PageLayout;
