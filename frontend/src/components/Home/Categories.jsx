import { Link } from "react-router-dom";


const categories = [
  {
    id: 1,
    name: "Fiction",
    icon: "📖",
    count: 8,
    color: "from-blue-500 to-indigo-500",
    bgLight: "bg-blue-50",
    bgDark: "dark:bg-blue-900/20",
  },
  {
    id: 2,
    name: "Historical",
    icon: "🏛️",
    count: 4,
    color: "from-cyan-500 to-blue-500",
    bgLight: "bg-cyan-50",
    bgDark: "dark:bg-cyan-900/20",
  },
  {
    id: 3,
    name: "Thriller",
    icon: "🔪",
    count: 3,
    color: "from-red-500 to-pink-500",
    bgLight: "bg-red-50",
    bgDark: "dark:bg-red-900/20",
  },
  {
    id: 4,
    name: "Humor",
    icon: "😂",
    count: 3,
    color: "from-amber-500 to-orange-500",
    bgLight: "bg-amber-50",
    bgDark: "dark:bg-amber-900/20",
  },
  {
    id: 5,
    name: "Novel",
    icon: "📚",
    count: 1,
    color: "from-emerald-500 to-teal-500",
    bgLight: "bg-emerald-50",
    bgDark: "dark:bg-emerald-900/20",
  },
  {
    id: 6,
    name: "Mystery",
    icon: "🔍",
    count: 1,
    color: "from-purple-500 to-pink-500",
    bgLight: "bg-purple-50",
    bgDark: "dark:bg-purple-900/20",
  },
  {
    id: 7,
    name: "Mistry",
    icon: "🎭",
    count: 1,
    color: "from-pink-500 to-rose-500",
    bgLight: "bg-pink-50",
    bgDark: "dark:bg-pink-900/20",
  },
];

const Categories = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        {}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/50 dark:to-blue-900/50 text-cyan-700 dark:text-cyan-300 text-sm font-semibold rounded-full mb-4">
            📂 Book Categories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Browse by{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Category
            </span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our diverse collection organized by genre and topic
          </p>
        </div>

        {}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              to={`/books?category=${category.name}`}
              key={category.id}
              className={`group relative ${category.bgLight} ${category.bgDark} rounded-2xl p-6 overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2`}
            >
              {}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {}
              <div className="relative z-10">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-white transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-white/80 transition-colors duration-300">
                  {category.count.toLocaleString()} books
                </p>

                {}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-white/0 group-hover:bg-white/20 flex items-center justify-center transition-all duration-300 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;