import { ReactNode } from "react";

interface TabsListProps {
  children: ReactNode;
  className?: string;
}

export const TabsList = ({ children, className = "" }: TabsListProps) => {
  return (
    <div className={`flex space-x-4 border-b ${className}`}>{children}</div>
  );
};
