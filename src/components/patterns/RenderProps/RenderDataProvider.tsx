"use client";
import { ReactNode, useEffect, useState } from "react";

export interface RenderDataProviderProps<T> {
  url: string;
  render: (props: {
    data: T | null;
    error: string | null;
    loading: boolean;
  }) => ReactNode;
}

export const RenderDataProvider = <T,>({
  url,
  render,
}: RenderDataProviderProps<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);
  return render({ data, error, loading });
};

// Render prop - это такая функция, которая возвращает jsx и эта функция используется как prop в другом компоненте
// Мы можем в функцию render передать все, что угодно и наш компонент будет универсальным