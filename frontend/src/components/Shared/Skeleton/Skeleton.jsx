const BookCardSkeleton = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg animate-pulse">
      {}
      <div className="h-72 bg-gray-200 dark:bg-gray-700 skeleton-loader" />

      {}
      <div className="p-6 space-y-4">
        {}
        <div className="w-24 h-6 bg-gray-200 dark:bg-gray-700 rounded-full skeleton-loader" />

        {}
        <div className="space-y-2">
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-lg skeleton-loader" />
          <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-lg skeleton-loader" />
        </div>

        {}
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded skeleton-loader" />
          <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded skeleton-loader" />
        </div>

        {}
        <div className="flex items-center justify-between pt-4">
          <div className="w-20 h-8 bg-gray-200 dark:bg-gray-700 rounded-lg skeleton-loader" />
          <div className="w-28 h-10 bg-gray-200 dark:bg-gray-700 rounded-xl skeleton-loader" />
        </div>
      </div>
    </div>
  );
};

const BookGridSkeleton = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(count)].map((_, index) => (
        <BookCardSkeleton key={index} />
      ))}
    </div>
  );
};

const TableRowSkeleton = () => {
  return (
    <tr className="animate-pulse">
      <td className="px-4 py-4">
        <div className="h-4 w-8 bg-gray-200 dark:bg-gray-700 rounded skeleton-loader" />
      </td>
      <td className="px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg skeleton-loader" />
          <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded skeleton-loader" />
        </div>
      </td>
      <td className="px-4 py-4">
        <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded skeleton-loader" />
      </td>
      <td className="px-4 py-4">
        <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded skeleton-loader" />
      </td>
      <td className="px-4 py-4">
        <div className="h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded-lg skeleton-loader" />
      </td>
    </tr>
  );
};

const TableSkeleton = ({ rows = 5 }) => {
  return (
    <tbody>
      {[...Array(rows)].map((_, index) => (
        <TableRowSkeleton key={index} />
      ))}
    </tbody>
  );
};

const StatCardSkeleton = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg animate-pulse">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-xl skeleton-loader" />
        <div className="w-12 h-5 bg-gray-200 dark:bg-gray-700 rounded-full skeleton-loader" />
      </div>
      <div className="space-y-2">
        <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded skeleton-loader" />
        <div className="h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded skeleton-loader" />
      </div>
    </div>
  );
};

export {
  BookCardSkeleton,
  BookGridSkeleton,
  TableRowSkeleton,
  TableSkeleton,
  StatCardSkeleton,
};