import { createContext } from "react";

import informacion from "./../mooks/info.json";

export const InfoContext = createContext();

export function InfoProvider({ children }) {
    return <InfoContext.Provider value={{ info: informacion }}>{children}</InfoContext.Provider>;
}
