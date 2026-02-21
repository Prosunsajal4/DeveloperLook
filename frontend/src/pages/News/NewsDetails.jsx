import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNewsApi } from "../../hooks/useNewsApi";

export default function NewsDetails() {
  const { id } = useParams();
  const { fetchArticle } = useNewsApi();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (!id) return;
    const load = async () => {
      try {
        const art = await fetchArticle(decodeURIComponent(id));
        setArticle(art);
      } catch (err) {
        console.error(err);
      }
    };
    load();
  }, [id, fetchArticle]);

  if (!article) return <div className="p-8">Loading...</div>;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold">{article.title}</h1>
      <p className="text-sm text-gray-500">
        {article.creator || article.source_id} •{" "}
        {article.pubDate ? new Date(article.pubDate).toLocaleString() : ""}
      </p>
      <div className="mt-4 prose max-w-none">
        <p>{article.content || article.raw?.description}</p>
      </div>
      <div className="mt-6">
        <a
          className="text-indigo-600"
          href={article.link}
          target="_blank"
          rel="noreferrer"
        >
          Open original article
        </a>
      </div>
    </div>
  );
}