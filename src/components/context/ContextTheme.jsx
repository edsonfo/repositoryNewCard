import React from "react";

export const themes = {
  dark: {
    background: "dark",
  },
  light: {
    background: "light",
  },
};
const ContextTheme = React.createContext(themes.dark);

export default ContextTheme;
