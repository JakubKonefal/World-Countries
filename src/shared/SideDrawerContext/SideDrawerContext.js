import React, { useState, createContext } from 'react';

export const SideDrawerContext = createContext();

const SideDrawerProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <SideDrawerContext.Provider value={{ open, setOpen }}>
      {children}
    </SideDrawerContext.Provider>
  );
};

export default SideDrawerProvider;
