import { useState, useEffect, useCallback } from "react";

const API_BASE = import.meta.env.VITE_API_URL || "";

export function useNewsApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNews = useCallback(async (params = {}) => {
    setLoading(true);
    setError(null);
    try {
      const url = new URL(`${API_BASE}/api/news`, window.location.origin);
      Object.entries(params || {}).forEach(([k, v]) => {
        if (v !== undefined && v !== null && v !== "")
          url.searchParams.set(k, v);
      });
      const resp = await fetch(url.toString());
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      const data = await resp.json();
      setLoading(false);
      return data;
    } catch (err) {
      setError(err.message || String(err));
      setLoading(false);
      throw err;
    }
  }, []);

  const fetchArticle = useCallback(async (articleId) => {
    if (!articleId) return null;
    const resp = await fetch(
      `${API_BASE}/api/news?page=1&limit=1&q=${encodeURIComponent(articleId)}`,
    );
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const json = await resp.json();
    return (json?.data && json.data[0]) || null;
  }, []);

  return { loading, error, fetchNews, fetchArticle };
}