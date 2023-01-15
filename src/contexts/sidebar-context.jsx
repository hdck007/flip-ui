import {useState, createContext} from "react";

import products from "../utils/data";

const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext, SidebarProvider };
