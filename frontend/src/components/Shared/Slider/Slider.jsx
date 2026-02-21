import { useEffect, useState } from "react";

const Slider = ({ slides = [], interval = 4000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, interval);
    return () => clearInterval(id);
  }, [slides.length, interval]);

  if (!slides.length) return null;

  return (
    <div className="relative w-full h-full overflow-hidden rounded-none shadow-lg">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === index
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {s.image ? (
            <img
              src={s.image}
              alt={s.title || `Slide ${i + 1}`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div
              className={`w-full h-full ${
                s.bg ||
                "bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600"
              }`}
            />
          )}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
          {(s.title || s.subtitle) && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
              {s.title && (
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg mb-4 max-w-4xl animate-fadeInUp">
                  {s.title}
                </h2>
              )}
              {s.subtitle && (
                <p className="mt-2 md:mt-3 text-base md:text-xl opacity-95 max-w-2xl animate-fadeInUp animation-delay-200">
                  {s.subtitle}
                </p>
              )}
              {s.cta && (
                <a
                  href={s.cta.href}
                  className="mt-6 inline-block px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 shadow-xl animate-fadeInUp animation-delay-400"
                >
                  {s.cta.label}
                </a>
              )}
            </div>
          )}
        </div>
      ))}

      {slides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-3 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-10 bg-white"
                  : "w-3 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Slider;