import Navbar from "./navbar";
import Filters from "./filters";
import { useContext } from "react";
import { SidebarContext } from "../contexts/sidebar-context";

const Layout = (props) => {
  const { open, setOpen } = useContext(SidebarContext);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="w-screen h-screen">
      <Navbar />
      <div className="md:flex w-full overflow-hidden md:overflow-auto">
        <div
          className={`w-[300px] h-screen top-0 bg-white dark:text-white dark:bg-stone-900 absolute md:relative ${
            open ? "translate-x-0" : "translate-x-[-400px]"
          } md:translate-x-0 md:w-1/4 p-2 transition-all ease-in-out duration-300`}
        >
          <div className="w-full h-full md:shadow-lg md:border dark:border-stone-700 p-2">
            {open && (
              <span
                onClick={handleClick}
                className="font-extrabold cursor-pointer visible md:hidden float-right "
              >
                X
              </span>
            )}
            <span className="font-extrabold text-xl p-2 ">Filters</span>
            <Filters />
          </div>
        </div>
        <div className="w-full md:w-3/4 p-2">
          <div className="shadow-lg w-full h-full dark:bg-stone-900 dark:border-stone-700 border">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
