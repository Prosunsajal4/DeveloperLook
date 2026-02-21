import Container from "../../components/Shared/Container";

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "https://i.pravatar.cc/200?img=32",
    bio: "Passionate book lover with 15 years in publishing industry.",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "https://i.pravatar.cc/200?img=11",
    bio: "Tech enthusiast building seamless digital experiences.",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Operations",
    image: "https://i.pravatar.cc/200?img=48",
    bio: "Logistics expert ensuring your books arrive on time.",
  },
  {
    name: "David Kim",
    role: "Customer Success",
    image: "https://i.pravatar.cc/200?img=60",
    bio: "Dedicated to making every customer interaction delightful.",
  },
];

const stats = [
  { label: "Books Delivered", value: "100K+" },
  { label: "Happy Customers", value: "25K+" },
  { label: "Seller Partners", value: "500+" },
  { label: "Cities Covered", value: "64" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
      <Container>
        {}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 text-indigo-700 dark:text-indigo-300 text-sm font-semibold rounded-full mb-4">
            📖 Our Story
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              BookCourier
            </span>
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to connect book lovers with their next favorite
            read, supporting local sellers and making literature accessible to
            everyone.
          </p>
        </div>

        {}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-white"
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
            </div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To become Bangladesh's most trusted book delivery platform, where
              every reader can discover, purchase, and receive their books with
              ease and delight.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To empower local book sellers with a digital platform while
              providing readers with a seamless, fast, and affordable book
              delivery experience.
            </p>
          </div>
        </div>

        {}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 mb-20 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              The passionate people behind BookCourier working to bring you the
              best book delivery experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-3xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 scale-110" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative w-28 h-28 rounded-full object-cover ring-4 ring-white dark:ring-gray-700 shadow-xl mx-auto"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {}
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-12">
            Our Core{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Values
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                Trust
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Building lasting relationships through transparency and
                reliability.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                Speed
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Fast delivery without compromising on quality or care.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                Passion
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Driven by our love for books and reading community.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;