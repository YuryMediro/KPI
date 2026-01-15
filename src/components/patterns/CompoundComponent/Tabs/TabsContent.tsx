'use client'

import useTabsContext from "@/hooks/useTabsContext";
import { ReactNode } from "react";

interface TabsContentProps {
  value: string;
  children: ReactNode;
}

export const TabsContent = ({ children, value }: TabsContentProps) => {
  const { value: activeKey } = useTabsContext();

  return activeKey === value ? (
    <div className="p-4 mt-2 border rounded-md">{children}</div>
  ) : null;
};
