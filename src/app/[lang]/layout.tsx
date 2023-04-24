import { usePathname } from "next/navigation";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

const PageLayout = ({
  params,
  children,
}: {
  params: any;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();

  return (
    <>
      <Navbar lang={params.lang} currentPath={pathname} />
      {children}
      <Footer lang={params.lang} currentPath={pathname} />
    </>
  );
};

export default PageLayout;
