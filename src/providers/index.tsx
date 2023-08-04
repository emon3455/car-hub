"use client";


import ThemeProvider from "./ThemeProvider";


const Providers = ({ children }:any) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
};


export default Providers;