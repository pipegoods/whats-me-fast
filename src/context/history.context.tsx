import { createContext, useEffect, useState } from "react";
import { HistoryContextType } from "../types/history";

const INITIAL_STATE: HistoryContextType = {
  history: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addHistory: () => {},
};

export const HistoryContext = createContext<HistoryContextType>(INITIAL_STATE);

const HistoryProvider = ({ children }: { children: React.ReactNode }) => {
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    const historyStorage = localStorage.getItem("history");
    if (historyStorage) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      setHistory(JSON.parse(historyStorage));
    }
  }, []);

  const addHistory = (newPhone: string) => {
    const existPhone = history.find((item) => item === newPhone);
    if (!existPhone) {
      localStorage.setItem("history", JSON.stringify([...history, newPhone]));
      setHistory([...history, newPhone]);
    }
  };

  return (
    <HistoryContext.Provider value={{ history, addHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};

export default HistoryProvider;
