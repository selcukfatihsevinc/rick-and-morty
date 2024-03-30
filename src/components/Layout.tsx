import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className={`h-full w-full`}>{children}</div>;
};

export default Layout;
