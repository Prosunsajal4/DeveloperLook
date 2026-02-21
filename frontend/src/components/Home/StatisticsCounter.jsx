import { useEffect, useState } from "react";


const staticStats = [
  { label: "Books Available", value: 21, suffix: "+", icon: "📚" },
  { label: "Happy Customers", value: 150, suffix: "+", icon: "😊" },
  { label: "Active Sellers", value: 8, suffix: "+", icon: "🏪" },
  { label: "Orders Delivered", value: 85, suffix: "+", icon: "📦" },
];

const StatCounter = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (value === 0) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(num >= 10000 ? 0 : 1) + "K";
    return num.toLocaleString();
  };

  return (
    <span>
      {formatNumber(count)}
      {suffix}
    </span>
  );
};

const StatisticsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById("stats-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="stats-section"
      className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden"
    >
      {}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Journey in{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Numbers
            </span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Trusted by thousands of book lovers and sellers across the country
          </p>
        </div>

        {}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {staticStats.map((stat, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative p-8 text-center">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {isVisible ? (
                    <StatCounter value={stat.value} suffix={stat.suffix} />
                  ) : (
                    "0"
                  )}
                </div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsCounter;