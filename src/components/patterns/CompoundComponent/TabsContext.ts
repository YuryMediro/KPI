import { createContext } from "react";

interface TabsContextProps {
  value: string;
  onChange: (value: string) => void;
}

export const TabsContext = createContext<TabsContextProps | null>(null);
