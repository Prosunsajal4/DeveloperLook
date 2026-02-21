import React from "react";

export default function NewsFilters({ filters, setFilters }) {
  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-gray-800 shadow-sm">
      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Search</label>
        <input
          value={filters.q || ""}
          onChange={(e) => setFilters((f) => ({ ...f, q: e.target.value }))}
          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-indigo-300 dark:bg-gray-900 dark:border-gray-700"
          placeholder="Search keyword"
        />
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Author</label>
        <input
          value={filters.author || ""}
          onChange={(e) =>
            setFilters((f) => ({ ...f, author: e.target.value }))
          }
          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-indigo-300 dark:bg-gray-900 dark:border-gray-700"
          placeholder="Author name"
        />
      </div>

      <div className="grid grid-cols-2 gap-2 mb-3">
        <div>
          <label className="block text-sm font-medium mb-1">Start Date</label>
          <input
            type="date"
            value={filters.startDate || ""}
            onChange={(e) =>
              setFilters((f) => ({ ...f, startDate: e.target.value }))
            }
            className="w-full px-3 py-2 border rounded-md dark:bg-gray-900 dark:border-gray-700"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">End Date</label>
          <input
            type="date"
            value={filters.endDate || ""}
            onChange={(e) =>
              setFilters((f) => ({ ...f, endDate: e.target.value }))
            }
            className="w-full px-3 py-2 border rounded-md dark:bg-gray-900 dark:border-gray-700"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-3">
        <div>
          <label className="block text-sm font-medium mb-1">Language</label>
          <input
            value={filters.language || ""}
            onChange={(e) =>
              setFilters((f) => ({ ...f, language: e.target.value }))
            }
            className="w-full px-3 py-2 border rounded-md dark:bg-gray-900 dark:border-gray-700"
            placeholder="en"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Country</label>
          <input
            value={filters.country || ""}
            onChange={(e) =>
              setFilters((f) => ({ ...f, country: e.target.value }))
            }
            className="w-full px-3 py-2 border rounded-md dark:bg-gray-900 dark:border-gray-700"
            placeholder="us"
          />
        </div>
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Categories</label>
        <input
          value={filters.categories || ""}
          onChange={(e) =>
            setFilters((f) => ({ ...f, categories: e.target.value }))
          }
          className="w-full px-3 py-2 border rounded-md dark:bg-gray-900 dark:border-gray-700"
          placeholder="business,technology"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Content Type</label>
        <input
          value={filters.contentType || ""}
          onChange={(e) =>
            setFilters((f) => ({ ...f, contentType: e.target.value }))
          }
          className="w-full px-3 py-2 border rounded-md dark:bg-gray-900 dark:border-gray-700"
          placeholder="news,blog"
        />
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setFilters({})}
          className="flex-1 px-4 py-2 border rounded-md text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-700"
        >
          Clear
        </button>
        <button
          onClick={() => setFilters((f) => ({ ...f, _apply: true }))}
          className="flex-1 px-4 py-2 rounded-md text-sm bg-indigo-600 text-white hover:bg-indigo-700"
        >
          Apply
        </button>
      </div>
    </div>
  );
}