import { ThemeContext } from "@/providers/ThemeProvider";
import { useContext } from "react";

export type Theme = {
    theme: any; // Replace 'any' with the actual type of your theme
    toggleTheme: () => void;
};

const useTheme = () => {

  const theme = useContext(ThemeContext);
  const isClient = typeof window !== "undefined";


  if (!isClient && !theme) {
    return { theme: null, toggleTheme: () => {} }; // Provide default values
  }



  if (!theme) {
    throw new Error(
      "You must wrap your application with ThemeProvider ot use the useTheme"
    );
  }

  return theme;

};


export default useTheme;