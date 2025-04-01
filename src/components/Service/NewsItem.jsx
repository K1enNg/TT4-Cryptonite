// SectionHeading.jsx
import React from "react";

function NewsItem({article}) {
  if (!article) {
    return null;
}
  return (
    <li className="mb-4 p-4 border rounded-lg shadow-md flex">
    {article.image_url && (
        <img
            src={article.image_url}
            alt={article.title}
            className="w-24 h-24 object-cover mr-4 rounded"
        />
    )}
    <div>
        <h2 className="text-lg font-bold text-white">{article.title}</h2>
        <p className="text-white">{article.description}</p>
        <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
        >
            Read more
        </a>
    </div>
</li>
  );
}

export default NewsItem; 
