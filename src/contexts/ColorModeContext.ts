import { createContext } from "react";

const ColorModeContext = createContext({
  toggleColorMode: () => {},
  resetColorMode: () => {},
});

export default ColorModeContext;
