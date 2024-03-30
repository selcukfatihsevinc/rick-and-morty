import { Link, useLocation } from "react-router-dom";

const Tabs = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-row space-x-[12px]">
      <Link
        to="/characters"
        className={["/", "/characters"].includes(pathname) ? "tab-active" : ""}
      >
        Characters
      </Link>
      <Link
        to="/episodes"
        className={["/episodes"].includes(pathname) ? "tab-active" : ""}
      >
        Episodes
      </Link>
      <Link
        to="/locations"
        className={["/locations"].includes(pathname) ? "tab-active" : ""}
      >
        Locations
      </Link>
    </div>
  );
};

export default Tabs;
