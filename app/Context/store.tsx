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
  proModalIsOpen: boolean;
  setProModalIsOpen: Dispatch<SetStateAction<boolean>>;
}

const GlobalContext = createContext<ContextProps>({
  data: [],
  setData: (): void => {},
  news: {} as News,
  setNews: (): void => {},
  proModalIsOpen: false,
  setProModalIsOpen: (): void => {},
});

export const GlobalContextProvider = ({ children }) => {
  const [data, setData] = useState<[] | News[]>([]);
  const [news, setNews] = useState<News>({} as News);
  const [proModalIsOpen, setProModalIsOpen] = useState<boolean>(false);

  return (
    <GlobalContext.Provider
      value={{
        data,
        setData,
        news,
        setNews,
        proModalIsOpen,
        setProModalIsOpen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
