import React from "react";
import NewsItem from "./NewsItem";
import LazyLoading from "../LazyLoading";

const NewsList = ({ news = [] }) => {
  if (!news.length) {
    return;
  }
  return (
    <ul>
      {news
        .filter((article) => article)
        .map((article, index) => (
          <NewsItem key={index} article={article} />
        ))}
    </ul>
  );
};

export default NewsList;
