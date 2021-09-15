import React, { useState, useEffect } from "react";

import { AppContext, useAppContext } from "../utils/context";

import { Link } from "react-router-dom";

const naurl =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Articles = () => {
  const { removeArticle, hits } = useAppContext();


  

  const { loading } = useAppContext();

  if (loading) {
    return <div className="loading"></div>;
  }

  // const removeArticle = (id) => {
  //   let newArticleArray = news.filter((article) => article.id !== id)
  //   setPeople(newPeople)
  // }

  return (
    <section className="news">
      {hits.map((article) => {
        const {
          title,
          url,
          objectID: id,
          author,
          points,
          num_comments: comments,
        } = article;
        return (
          <article className="stroy-wrapper" key={id}>
            <h4>{title}</h4>
            <p className="info">
              {points} points by {author}
            </p>

            <div>
              <a href={url}>Read More</a>
              <button onClick={removeArticle(id)}>Remove</button>
            </div>
          </article>
        );
      })}
    </section>
  );
};
// removeArticle((article) => article.id !== id)
export default Articles;
