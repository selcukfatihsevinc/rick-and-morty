import { ReactNode } from "react";
import Hero from "./common/Hero";
import Tabs from "./common/Tabs";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`h-full max-w-[800px] mx-auto`}>
      <Hero />
      <Tabs />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
