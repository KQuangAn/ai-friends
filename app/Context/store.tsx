"use client";

import { News } from "@/components/types/types";
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface ContextProps {
  data: News[];
  setData: Dispatch<SetStateAction<News[]>>;
  news: News;
  setNews: Dispatch<SetStateAction<News>>;
}

const GlobalContext = createContext<ContextProps>({
  data: [],
  setData: (): News[] => [],
  news: {} as News,
  setNews: (): void => {},
});

export const GlobalContextProvider = ({ children }) => {
  const [data, setData] = useState<[] | News[]>([]);
  const [news, setNews] = useState<News>({});

  return (
    <GlobalContext.Provider value={{ data, setData, news, setNews }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
