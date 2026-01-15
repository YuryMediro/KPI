import { TabsContext } from "@/components/patterns/CompoundComponent/TabsContext";
import { useContext } from "react";

export default function useTabsContext() {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error("useTabsContext must be used within a TabsProvider");
  }
  return context;
}
