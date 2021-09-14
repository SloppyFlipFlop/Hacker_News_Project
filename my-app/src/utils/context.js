import React, { useState, useContext, useEffect, useReducer } from "react";

import { reducer } from "./reducer";

const API_ENDPOINT = `https://hn.algolia.com/api/v1/search?query=`;

const initialState = {
  loading: true,
  hits: [],

  page: 0,
  query: "React",
  nbPages: 0,
};

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchStories = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: "SET_HITS", payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (query) => {
    dispatch({ type: "HANDLE_SEARCH", payload: query });
  };

  useEffect(() => {
    fetchStories(`${API_ENDPOINT}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return (
    <AppContext.Provider value={{ ...state, handleSearch,  }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
