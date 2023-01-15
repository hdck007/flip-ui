import { GiHamburgerMenu } from "react-icons/gi";
import { useContext } from "react";
import { SidebarContext } from "../contexts/sidebar-context";

const Navbar = () => {
  const { setOpen } = useContext(SidebarContext);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="bg-blue-400 w-screen m-0 h-16 flex items-center p-5 text-white">
      <GiHamburgerMenu onClick={handleClick} className="text-2xl cursor-pointer md:hidden" />
      &nbsp; Zipkart
    </div>
  );
};

export default Navbar;
