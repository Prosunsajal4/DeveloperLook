import React, { useEffect, useState } from "react";
import { useNewsApi } from "../../hooks/useNewsApi";
import NewsCard from "../../components/News/NewsCard";
import NewsFilters from "../../components/News/NewsFilters";
import NewsHubSpinner from "../../components/Shared/BookCourierSpinner";

export default function NewsFeed() {
  const { fetchNews } = useNewsApi();
  const [filters, setFilters] = useState({ page: 1, limit: 20 });
  const [articles, setArticles] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let applied = filters._apply !== undefined ? filters._apply : true;
    if (!applied) return;
    const p = async () => {
      try {
        setLoading(true);
        const params = { ...filters };
        delete params._apply;
        const res = await fetchNews(params);
        setArticles(res.data || []);
        setTotal(res.total || 0);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    p();
  }, [filters, fetchNews]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-extrabold">Latest News</h1>
        <div className="text-sm text-gray-500">Total: {total}</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <aside className="md:col-span-1">
          <NewsFilters filters={filters} setFilters={setFilters} />
        </aside>

        <main className="md:col-span-3">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <NewsHubSpinner size={56} />
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {articles.map((a) => (
                <NewsCard key={a.articleId} article={a} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}