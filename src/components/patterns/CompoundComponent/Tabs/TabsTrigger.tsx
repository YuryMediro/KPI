'use client'

import useTabsContext from "@/hooks/useTabsContext";
import { ReactNode } from "react";

interface TabsTriggerProps {
  value: string;
  children: ReactNode;
}

export const TabsTrigger = ({ children, value }: TabsTriggerProps) => {
  const { value: activeKey, onChange } = useTabsContext();
  const isActive = activeKey === value;

  const handleClick = () => {
    onChange(value);
  };

  return (
    <button
      className={`px-4 py-2 border-b-2 cursor-pointer transition-all ${
        isActive
          ? "border-blue-500 text-blue-500"
          : "text-gray-500 border-transparent"
      }`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
