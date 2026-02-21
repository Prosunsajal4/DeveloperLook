import React from "react";
import { Link } from "react-router-dom";

export default function NewsCard({ article }) {
  const date = article?.pubDate
    ? new Date(article.pubDate).toLocaleString()
    : "";
  const image =
    article.image || article.image_url || article?.thumbnail || null;
  return (
    <article className="p-4 border rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="md:flex md:items-start md:gap-4">
        {image && (
          <div className="w-full md:w-48 h-32 md:h-28 overflow-hidden rounded-md flex-shrink-0">
            <img
              src={image}
              alt={article.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        <div className="flex-1 mt-3 md:mt-0">
          <h3 className="font-semibold text-lg leading-tight">
            <Link
              to={`/news/${encodeURIComponent(article.articleId)}`}
              className="hover:text-indigo-600"
            >
              {article.title}
            </Link>
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            {article.creator || article.source_id || "Unknown source"} • {date}
          </p>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            {(article.content || article.description || "").slice(0, 260)}
            {(article.content || article.description || "").length > 260
              ? "..."
              : ""}
          </p>
          <div className="mt-3">
            <a
              className="text-indigo-600 hover:underline"
              href={article.link}
              target="_blank"
              rel="noreferrer"
            >
              Read original
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
