"use client";

import { ReactNode, RefObject, useMemo, useState } from "react";
import { TabsContext } from "../TabsContext";

interface TabsProps {
  children: ReactNode;
  value?: string;
  onChange?: (value: string) => void;
  defaultActiveKey: string;
  ref?: RefObject<HTMLDivElement>;
}

export const RootTabs = ({
  children,
  onChange,
  value,
  defaultActiveKey,
  ref,
}: TabsProps) => {
  const [internalValue, setInternalValue] = useState(defaultActiveKey); //Состояние что бы компонент мог сам переключать табы

  const isControlled = value !== undefined; //определяем контролируемый или нет компонент и смотрим, что value не undefined

  const activeKey = isControlled ? value : internalValue; //текущий активный кдюч, если он контролируемый, то берется value от родителя иначе internalValue

  const setValue = (newValue: string) => {
    if (newValue === activeKey) {
      // предотвращаем лишние обновления
      return;
    }
    if (isControlled) {
      onChange?.(newValue); // управляемый: уведомляем родителя
    } else {
      setInternalValue(newValue); // неуправляемый: обновляем свое состояние
    }
  };

  const contextValue = useMemo(
    () => ({
      value: activeKey,
      onChange: setValue,
    }),
    [activeKey, setValue]
  );

  return (
    <div ref={ref}>
      <TabsContext value={contextValue}>{children}</TabsContext>
    </div>
  );
};
