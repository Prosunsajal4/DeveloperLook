import { useState } from "react";
import toast from "react-hot-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setEmail("");
    toast.success("Successfully subscribed! 🎉");
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-100 via-transparent to-transparent dark:from-indigo-900/20" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-100 via-transparent to-transparent dark:from-purple-900/20" />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            {}
            <div className="p-8 md:p-12">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-rose-100 to-pink-100 dark:from-rose-900/50 dark:to-pink-900/50 text-rose-700 dark:text-rose-300 text-sm font-semibold rounded-full mb-4">
                📬 Stay Updated
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Subscribe to Our{" "}
                <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
                  Newsletter
                </span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                Get weekly book recommendations, exclusive deals, and updates on
                new arrivals delivered straight to your inbox!
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-rose-500 focus:ring-4 focus:ring-rose-500/20 transition-all duration-200 dark:text-white"
                  />
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 hidden md:block">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="px-6 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-rose-500/30 transition-all duration-300 disabled:opacity-50"
                    >
                      {isLoading ? (
                        <svg
                          className="w-5 h-5 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                      ) : (
                        "Subscribe"
                      )}
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full md:hidden px-6 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-rose-500/30 transition-all duration-300 disabled:opacity-50"
                >
                  {isLoading ? "Subscribing..." : "Subscribe Now"}
                </button>
              </form>

              <p className="text-sm text-gray-400 dark:text-gray-500 mt-4">
                🔒 We respect your privacy. Unsubscribe at any time.
              </p>
            </div>

            {}
            <div className="hidden md:block h-full bg-gradient-to-br from-rose-500 to-pink-600 p-12 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-8xl mb-4">📖</div>
                  <div className="text-6xl font-bold mb-2">10K+</div>
                  <div className="text-xl opacity-90">Happy Subscribers</div>
                </div>
              </div>
              {}
              <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full" />
              <div className="absolute bottom-8 left-8 w-16 h-16 bg-white/10 rounded-full" />
              <div className="absolute top-1/3 left-4 w-8 h-8 bg-white/20 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;