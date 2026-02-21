import Container from "../../components/Shared/Container";
import { useState } from "react";

const PrivacyTerms = () => {
  const [activeTab, setActiveTab] = useState("privacy");

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-indigo-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12">
      <Container>
        {}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-linear-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 text-indigo-700 dark:text-indigo-300 text-sm font-semibold rounded-full mb-4">
            📋 Legal
          </span>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Privacy &{" "}
            <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Terms
            </span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Important information about how we protect your data and our terms
            of service.
          </p>
        </div>

        {}
        <div className="flex justify-center mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-1 shadow-lg">
            <button
              onClick={() => setActiveTab("privacy")}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === "privacy"
                  ? "bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                  : "text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
              }`}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveTab("terms")}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === "terms"
                  ? "bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                  : "text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
              }`}
            >
              Terms of Service
            </button>
          </div>
        </div>

        {}
        <div className="max-w-4xl mx-auto">
          {activeTab === "privacy" && (
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                Privacy Policy
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Last updated: January 9, 2026
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                  Information We Collect
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  We collect information you provide directly to us, such as
                  when you create an account, make a purchase, or contact us for
                  support. This includes your name, email address, shipping
                  address, and payment information.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                  How We Use Your Information
                </h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 leading-relaxed mb-6 space-y-2">
                  <li>To process and fulfill your orders</li>
                  <li>To communicate with you about your orders and account</li>
                  <li>To provide customer support</li>
                  <li>
                    To send you marketing communications (with your consent)
                  </li>
                  <li>To improve our services and develop new features</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                  Information Sharing
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  We do not sell, trade, or otherwise transfer your personal
                  information to third parties without your consent, except as
                  described in this policy. We may share your information with
                  trusted service providers who assist us in operating our
                  website and conducting our business.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                  Data Security
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  We implement appropriate security measures to protect your
                  personal information against unauthorized access, alteration,
                  disclosure, or destruction. All payment information is
                  processed through secure, encrypted channels.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                  Your Rights
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  You have the right to access, update, or delete your personal
                  information. You can also opt out of marketing communications
                  at any time. Contact us if you wish to exercise these rights.
                </p>
              </div>
            </div>
          )}

          {activeTab === "terms" && (
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                Terms of Service
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Last updated: January 9, 2026
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                  Acceptance of Terms
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  By accessing and using NewsHub, you accept and agree to be
                  bound by the terms and provision of this agreement. If you do
                  not agree to abide by the above, please do not use this
                  service.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                  Use License
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Permission is granted to temporarily access the materials on
                  NewsHub for personal, non-commercial transitory viewing only.
                  This is the grant of a license, not a transfer of title, and
                  under this license you may not:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 leading-relaxed mb-6 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>
                    Use the materials for any commercial purpose or for any
                    public display
                  </li>
                  <li>
                    Attempt to decompile or reverse engineer any software
                    contained on our website
                  </li>
                  <li>
                    Remove any copyright or other proprietary notations from the
                    materials
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                  User Accounts
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  When you create an account with us, you must provide
                  information that is accurate, complete, and current at all
                  times. You are responsible for safeguarding the password and
                  for all activities that occur under your account.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                  Returns and Refunds
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  NewsHub provides aggregated news content from third-party
                  sources. We do not sell physical goods, so returns and refunds
                  policies for products are not applicable.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                  Limitation of Liability
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  In no event shall NewsHub or its suppliers be liable for any
                  damages (including, without limitation, damages for loss of
                  data or profit, or due to business interruption) arising out
                  of the use or inability to use the materials on our website.
                </p>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default PrivacyTerms;
