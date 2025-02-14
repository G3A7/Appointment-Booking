/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext } from "react";
import { doctors } from "../assets/assets_frontend/assets";
export const AppContext = createContext();

function AppContextProvider({ children }) {
  return <AppContext.Provider value={{ doctors }}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
