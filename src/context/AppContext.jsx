/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { doctors } from "../assets/assets_frontend/assets";
export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [token, setToken] = useState(false);
  return <AppContext.Provider value={{ doctors, token, setToken }}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
