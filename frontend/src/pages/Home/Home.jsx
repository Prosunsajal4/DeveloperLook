import { lazy, Suspense } from "react";
import BookCourierSpinner from "../../components/Shared/BookCourierSpinner";


const LatestBooks = lazy(() => import("../../components/Home/LatestBooks"));
const Slider = lazy(() => import("../../components/Shared/Slider/Slider"));
const CoverageMap = lazy(() => import("../../components/Home/CoverageMap"));
const WhyChooseBookCourier = lazy(() =>
  import("../../components/Home/WhyChooseBookCourier")
);
const ExtraSectionOne = lazy(() =>
  import("../../components/Home/ExtraSectionOne")
);
const ExtraSectionTwo = lazy(() =>
  import("../../components/Home/ExtraSectionTwo")
);
const Testimonials = lazy(() => import("../../components/Home/Testimonials"));
const FAQ = lazy(() => import("../../components/Home/FAQ"));
const StatisticsCounter = lazy(() =>
  import("../../components/Home/StatisticsCounter")
);
const Newsletter = lazy(() => import("../../components/Home/Newsletter"));
const FeaturedAuthors = lazy(() =>
  import("../../components/Home/FeaturedAuthors")
);
const Categories = lazy(() => import("../../components/Home/Categories"));


const ComponentLoader = ({ componentName }) => (
  <div className="flex items-center justify-center py-16">
    <div className="text-center">
      <BookCourierSpinner />
      <p className="mt-4 text-gray-600 dark:text-gray-400">
        Loading {componentName}...
      </p>
    </div>
  </div>
);

const Home = () => {
  const heroSlides = [
    {
      bg: "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600",
      title: "Discover Your Next Favorite Book",
      subtitle:
        "Curated picks, fast delivery, and exclusive deals for readers.",
      cta: { href: "/books", label: "Explore Collections" },
    },
    {
      bg: "bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600",
      title: "Fresh Reads, Delivered Quickly",
      subtitle: "From bestsellers to hidden gems—add to wishlist instantly.",
      cta: { href: "/dashboard/my-wishlist", label: "View Wishlist" },
    },
    {
      bg: "bg-gradient-to-r from-amber-600 via-orange-600 to-red-600",
      title: "Support Local Sellers",
      subtitle: "Great books from trusted sellers in your community.",
      cta: { href: "/dashboard/seller/add-book", label: "Sell a Book" },
    },
  ];

  return (
    <div className="overflow-hidden">
      {}
      <div className="h-[60vh] md:h-[70vh]">
        <Suspense fallback={<ComponentLoader componentName="Hero Slider" />}>
          <Slider slides={heroSlides} interval={5000} />
        </Suspense>
      </div>

      {}
      <section className="py-16">
        <Suspense fallback={<ComponentLoader componentName="Latest Books" />}>
          <LatestBooks />
        </Suspense>
      </section>

      {}
      <Suspense fallback={<ComponentLoader componentName="Categories" />}>
        <Categories />
      </Suspense>

      {}
      <Suspense fallback={<ComponentLoader componentName="Statistics" />}>
        <StatisticsCounter />
      </Suspense>

      {}
      <section className="py-16">
        <Suspense fallback={<ComponentLoader componentName="Why Choose Us" />}>
          <WhyChooseBookCourier />
        </Suspense>
      </section>

      {}
      <Suspense fallback={<ComponentLoader componentName="Featured Authors" />}>
        <FeaturedAuthors />
      </Suspense>

      {}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <Suspense fallback={<ComponentLoader componentName="Coverage Map" />}>
          <CoverageMap />
        </Suspense>
      </section>

      {}
      <Suspense fallback={<ComponentLoader componentName="Testimonials" />}>
        <Testimonials />
      </Suspense>

      {}
      <section className="py-16">
        <Suspense fallback={<ComponentLoader componentName="Reading Tips" />}>
          <ExtraSectionOne />
        </Suspense>
      </section>

      {}
      <Suspense fallback={<ComponentLoader componentName="FAQ" />}>
        <FAQ />
      </Suspense>

      {}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <Suspense fallback={<ComponentLoader componentName="Best Sellers" />}>
          <ExtraSectionTwo />
        </Suspense>
      </section>

      {}
      <Suspense fallback={<ComponentLoader componentName="Newsletter" />}>
        <Newsletter />
      </Suspense>
    </div>
  );
};

export default Home;