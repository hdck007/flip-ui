import { useEffect } from "react";
import useToggle from "../hooks/useToggle";

const Button = () => {
  const { open: on, toggle, onOpen } = useToggle(false);
  const handleClick = () => {
    console.log(on);
    if (!on) {
      window.localStorage.setItem("theme", "dark");
      window.document.documentElement.classList.add("dark");
    } else {
      window.localStorage.setItem("theme", "white");
      window.document.documentElement.classList.remove("dark");
    }
    toggle();
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      document.documentElement.classList.add(theme);
      console.log(theme);
      if (theme === "dark") {
        onOpen()
      }
    }
  }, []);

  return (
    <button
      onClick={handleClick}
      className={`w-10  h-6 m-auto bg-gray-300 rounded-full justify-start items-center flex shadow-2xl transition-all`}
    >
      <span
        className={`bg-gray-700
        ${on ? "translate-x-5" : "translate-x-0"}
        transform rounded-full h-5 w-5 m-0 p-0 shadow-xl transition-all`}
      ></span>
    </button>
  );
};

export default Button;
