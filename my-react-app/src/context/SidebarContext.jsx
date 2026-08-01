import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [tab, settab] = useState(0);
  return (
    <SidebarContext.Provider value={{ tab, settab }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSide = () => useContext(SidebarContext);
