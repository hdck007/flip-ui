import { GiHamburgerMenu } from "react-icons/gi";
import { useContext } from "react";
import { SidebarContext } from "../contexts/sidebar-context";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import Button from "./togglebtn";

const Navbar = () => {
  const { setOpen } = useContext(SidebarContext);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="bg-blue-400 w-screen m-0 h-16 flex relative items-center p-5 text-white">
      <div className="absolute right-5 top-5 flex items-center justify-around">
        <MdLightMode className="dark:text-white mr-2 text-xl" />
        <Button />
        <MdDarkMode className="dark:text-white ml-2 text-xl" />
      </div>
      <GiHamburgerMenu onClick={handleClick} className="text-2xl cursor-pointer md:hidden" />
      &nbsp; Zipkart
    </div>
  );
};

export default Navbar;
