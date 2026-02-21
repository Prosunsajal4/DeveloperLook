import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Book Enthusiast",
    avatar: "https://i.pravatar.cc/150?img=32",
    rating: 5,
    comment:
      "BookCourier has completely transformed how I discover new books. The delivery is fast and the selection is amazing!",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Avid Reader",
    avatar: "https://i.pravatar.cc/150?img=11",
    rating: 5,
    comment:
      "I love supporting local sellers through this platform. The quality of service is exceptional and prices are fair.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Literature Professor",
    avatar: "https://i.pravatar.cc/150?img=48",
    rating: 5,
    comment:
      "As someone who needs books frequently for my classes, BookCourier has been a lifesaver. Highly recommended!",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Student",
    avatar: "https://i.pravatar.cc/150?img=60",
    rating: 4,
    comment:
      "Great platform for finding textbooks and novels alike. The wishlist feature is super helpful for tracking books.",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Book Collector",
    avatar: "https://i.pravatar.cc/150?img=44",
    rating: 5,
    comment:
      "The rare book collection here is incredible. I've found editions I couldn't find anywhere else!",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Indie Author",
    avatar: "https://i.pravatar.cc/150?img=68",
    rating: 5,
    comment:
      "As a seller, the platform is intuitive and the support team is fantastic. Great community of book lovers!",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        {}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 text-indigo-700 dark:text-indigo-300 text-sm font-semibold rounded-full mb-4">
            💬 Customer Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Real stories from real readers who have experienced the joy of
            BookCourier
          </p>
        </div>

        {}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                index === activeIndex
                  ? "ring-2 ring-indigo-500 ring-offset-4 dark:ring-offset-gray-900"
                  : ""
              }`}
            >
              {}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {}
              <div className="flex items-center gap-1 mb-4 mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "text-yellow-400"
                        : "text-gray-300 dark:text-gray-600"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.comment}"
              </p>

              {}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-4 ring-indigo-100 dark:ring-indigo-900/50"
                />
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-indigo-600 dark:text-indigo-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 bg-indigo-600"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-indigo-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;