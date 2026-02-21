import Container from "../../components/Shared/Container";
import { Link } from "react-router-dom";

const Blog = () => {

  const blogs = [
    {
      id: 1,
      title: "The Future of Reading: Digital vs Physical Books",
      excerpt:
        "Explore the ongoing debate between digital and physical books, and how technology is shaping the future of reading habits.",
      author: "Sarah Johnson",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Reading Trends",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
    },
    {
      id: 2,
      title: "Building a Personal Library: Tips for Book Collectors",
      excerpt:
        "Learn how to curate and maintain a personal library that reflects your interests and grows with you over time.",
      author: "Michael Chen",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Book Collecting",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    },
    {
      id: 3,
      title: "Supporting Local Authors and Independent Bookstores",
      excerpt:
        "Discover the importance of supporting local authors and independent bookstores in the age of online retail giants.",
      author: "Emma Rodriguez",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Community",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
    },
    {
      id: 4,
      title: "The Psychology of Reading: How Books Change Our Brains",
      excerpt:
        "Scientific insights into how reading affects brain development, empathy, and cognitive function.",
      author: "Dr. James Wilson",
      date: "2024-01-01",
      readTime: "8 min read",
      category: "Science",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400",
    },
    {
      id: 5,
      title: "Book-to-Film Adaptations: Success Stories and Failures",
      excerpt:
        "An analysis of successful and unsuccessful book-to-film adaptations and what makes a good adaptation.",
      author: "Lisa Park",
      date: "2023-12-28",
      readTime: "6 min read",
      category: "Entertainment",
      image:
        "https://images.unsplash.com/photo-1489599735734-79b4dfe3b7a8?w=400",
    },
    {
      id: 6,
      title: "Sustainable Reading: Eco-Friendly Book Practices",
      excerpt:
        "How to make your reading habits more environmentally friendly, from choosing sustainable books to proper disposal.",
      author: "Green Reader",
      date: "2023-12-20",
      readTime: "4 min read",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-indigo-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12">
      <Container>
        {}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-linear-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 text-indigo-700 dark:text-indigo-300 text-sm font-semibold rounded-full mb-4">
            📝 Our Blog
          </span>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              BookCourier
            </span>{" "}
            Blog
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Insights, stories, and thoughts about books, reading, and the
            literary world. Join our community of book lovers.
          </p>
        </div>

        {}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-indigo-600">
                    {blog.category}
                  </span>
                </div>
              </div>

              {}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span>{blog.author}</span>
                  <span>•</span>
                  <span>{new Date(blog.date).toLocaleDateString()}</span>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>

                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3 line-clamp-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {blog.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>

                <button className="w-full py-2 bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>

        {}
        <div className="mt-16 bg-linear-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-indigo-100 mb-6 max-w-md mx-auto">
            Subscribe to our newsletter for the latest blog posts, book
            recommendations, and literary news.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blog;