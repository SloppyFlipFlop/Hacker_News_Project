import React, { useState, useEffect } from "react";

const API_ENDPOINT = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&`;

// query is the s="batman" part
export const useFetch = (query) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [News, setNews] = useState([]);

  // url is a variable that will take in the endpoint and the query
  const fetchNews = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === "True") {
        setNews(data.Search || data);
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.Error });
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(`${API_ENDPOINT}${query}`);
    fetchNews(`${API_ENDPOINT}${query}`);
  }, [query]);

  return { loading, error, News };
};
