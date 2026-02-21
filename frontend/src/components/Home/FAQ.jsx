import { useState } from "react";

const faqs = [
  {
    question: "How does book delivery work?",
    answer:
      "Once you place an order, our seller partners prepare your book within 24 hours. We partner with reliable courier services to deliver your books safely to your doorstep. You can track your order through your dashboard.",
  },
  {
    question: "Can I become a seller on BookCourier?",
    answer:
      "Absolutely! Click on your profile and select 'Become a Seller'. Fill out the application form and our team will review it within 2-3 business days. Once approved, you can start listing your books immediately.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards through our secure Stripe payment gateway. We also support various digital wallets for your convenience. All transactions are encrypted and secure.",
  },
  {
    question: "How do I leave a review for a book?",
    answer:
      "After purchasing and receiving a book, go to the book's detail page and scroll down to the reviews section. You can leave a star rating and write your thoughts about the book to help other readers.",
  },
  {
    question: "What is the return policy?",
    answer:
      "We offer a 7-day return policy for books that arrive damaged or are significantly different from their description. Contact our support team with photos and we'll process your return or refund promptly.",
  },
  {
    question: "How does the wishlist feature work?",
    answer:
      "You can add any book to your wishlist by clicking the heart icon on the book card or detail page. Access your wishlist from your dashboard to view saved books and easily purchase them later.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        {}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/50 dark:to-teal-900/50 text-emerald-700 dark:text-emerald-300 text-sm font-semibold rounded-full mb-4">
            ❓ Got Questions?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about BookCourier. Can't find your
            answer? Contact us!
          </p>
        </div>

        {}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/20"
                  : "bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className={`w-full px-6 py-5 flex items-center justify-between text-left transition-colors ${
                  openIndex === index
                    ? "text-white"
                    : "text-gray-800 dark:text-white"
                }`}
              >
                <span className="font-semibold text-lg pr-4">
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? "bg-white/20 rotate-180"
                      : "bg-emerald-100 dark:bg-emerald-900/50"
                  }`}
                >
                  <svg
                    className={`w-5 h-5 ${
                      openIndex === index
                        ? "text-white"
                        : "text-emerald-600 dark:text-emerald-400"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p
                    className={`leading-relaxed ${
                      openIndex === index
                        ? "text-white/90"
                        : "text-gray-600 dark:text-gray-300"
                    }`}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {}
        <div className="mt-12 text-center">
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Still have questions?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 transform hover:-translate-y-1"
          >
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
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;