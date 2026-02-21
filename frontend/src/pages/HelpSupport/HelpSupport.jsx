import Container from "../../components/Shared/Container";
import { useState } from "react";

const HelpSupport = () => {
  const [activeTab, setActiveTab] = useState("faq");

  const faqs = [
    {
      question: "How do I place an order?",
      answer:
        "To place an order, browse our collection of books, click on 'View Details' for the book you're interested in, then click 'Buy Now'. You'll be redirected to our secure payment page.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, debit cards, and PayPal through our secure Stripe payment gateway.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Delivery typically takes 3-5 business days within Bangladesh. International shipping may take 7-14 business days depending on your location.",
    },
    {
      question: "Can I return or exchange a book?",
      answer:
        "Yes, you can return books within 7 days of delivery if they're in their original condition. Contact our support team to initiate a return.",
    },
    {
      question: "How do I become a seller?",
      answer:
        "Click on 'Become a Seller' in your dashboard, fill out the application form, and our admin team will review your application within 24-48 hours.",
    },
    {
      question: "I forgot my password. What should I do?",
      answer:
        "Click on 'Forgot Password' on the login page, enter your email address, and we'll send you a password reset link.",
    },
    {
      question: "How do I leave a review?",
      answer:
        "You can leave a review after purchasing and receiving a book. Go to the book details page and scroll down to the reviews section.",
    },
    {
      question: "Can I cancel my order?",
      answer:
        "Orders can be cancelled within 24 hours of placement. Contact our support team or use the 'Cancel Order' button in your dashboard.",
    },
  ];

  const contactMethods = [
    {
      icon: "📧",
      title: "Email Support",
      description: "Get help via email",
      contact: "prosunsajal123@gmail.com",
      availability: "24/7 response within 2 hours",
    },
    {
      icon: "📞",
      title: "Phone Support",
      description: "Speak with our team",
      contact: "+8801911572117",
      availability: "Mon-Fri, 9AM-6PM BST",
    },
    {
      icon: "💬",
      title: "Live Chat",
      description: "Instant help online",
      contact: "Available on website",
      availability: "Mon-Fri, 9AM-6PM BST",
    },
    {
      icon: "📱",
      title: "WhatsApp",
      description: "Quick support via WhatsApp",
      contact: "+8801911572117",
      availability: "Mon-Fri, 9AM-6PM BST",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-indigo-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12">
      <Container>
        {}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-linear-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 text-indigo-700 dark:text-indigo-300 text-sm font-semibold rounded-full mb-4">
            🆘 Help & Support
          </span>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            How Can We{" "}
            <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Help You?
            </span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Find answers to common questions or get in touch with our support
            team. We're here to help you have the best book shopping experience.
          </p>
        </div>

        {}
        <div className="flex justify-center mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-1 shadow-lg">
            <button
              onClick={() => setActiveTab("faq")}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === "faq"
                  ? "bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                  : "text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
              }`}
            >
              FAQ
            </button>
            <button
              onClick={() => setActiveTab("contact")}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === "contact"
                  ? "bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                  : "text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
              }`}
            >
              Contact Us
            </button>
          </div>
        </div>

        {}
        {activeTab === "faq" && (
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
                >
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white pr-4">
                        {faq.question}
                      </h3>
                      <svg
                        className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform duration-200 flex-shrink-0"
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
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        )}

        {}
        {activeTab === "contact" && (
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    {method.description}
                  </p>
                  <div className="text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
                    {method.contact}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {method.availability}
                  </div>
                </div>
              ))}
            </div>

            {}
            <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
                Send us a Message
              </h2>
              <form className="space-y-6 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 resize-none"
                    placeholder="Tell us more about your question or issue..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2"
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
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default HelpSupport;