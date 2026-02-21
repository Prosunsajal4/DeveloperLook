import React from "react";

const ExtraSectionTwo = () => (
  <section className="py-16 bg-linear-to-r from-blue-50 to-lime-100">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4 animate-fade-in">
        Our Promise
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="p-6 bg-white rounded-xl shadow animate-fade-in">
          <h3 className="font-semibold text-lg mb-2">Quality Books</h3>
          <p>We guarantee original, high-quality books for every order.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow animate-fade-in">
          <h3 className="font-semibold text-lg mb-2">Support</h3>
          <p>Our team is always here to help you with any queries or issues.</p>
        </div>
      </div>
    </div>
  </section>
);

export default ExtraSectionTwo;