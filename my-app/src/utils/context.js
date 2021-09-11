import React, { useState, useContext } from "react";

import { useFetch } from "./useFetch";

const NewsContext = React.createContext();

export const NewsProvider = ({ children }) => {
  const [query, setQuery] = useState("batman");
  const { loading, error, news } = useFetch(`s=${query}&`);

  return (
    <NewsContext.Provider value={{ query, setQuery, loading, error, news }}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNewsContext = () => {
  return useContext(NewsContext);
};
