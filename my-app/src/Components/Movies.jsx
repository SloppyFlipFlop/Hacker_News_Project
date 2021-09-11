import React, { useState, useEffect } from "react";

import { useMovieContext } from "../utils/context";
import { Link } from "react-router-dom";

const naurl = "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png"

const News = () => {
  const { news, loading } = useMovieContext();

  if (loading) {
    return <div className="loading"></div>;
  }

  return (
    <section className="news">
      {news.map((article) => {
        const { imbdID: id, Poster: poster, Title: title, Year: year } = article;
        return (
          <Link to={`/news/${id}`} key={id} className="article">
            <article>
              <img src={poster === 'N/A' ? naurl : poster} alt={title} />
              <div className="article info">
                <h4 className="title">{title}</h4>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default News;
