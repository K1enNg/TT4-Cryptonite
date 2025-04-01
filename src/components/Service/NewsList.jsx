// ServiceList.js
import React from "react";
import NewsItem from "./NewsItem";

const NewsList = ({ news = [] }) => {
  if (!news.length) {
    return <p>No news available.</p>;
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
