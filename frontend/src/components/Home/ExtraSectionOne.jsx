import React from "react";

const ExtraSectionOne = () => (
  <section className="py-16 bg-white">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-lime-700 mb-4 animate-fade-in">
        How It Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="p-6 bg-lime-50 rounded-xl shadow animate-fade-in">
          <h3 className="font-semibold text-lg mb-2">1. Browse</h3>
          <p>Explore our vast collection and find your favorite books.</p>
        </div>
        <div className="p-6 bg-blue-50 rounded-xl shadow animate-fade-in">
          <h3 className="font-semibold text-lg mb-2">2. Order</h3>
          <p>Place your order easily with secure payment options.</p>
        </div>
        <div className="p-6 bg-yellow-50 rounded-xl shadow animate-fade-in">
          <h3 className="font-semibold text-lg mb-2">3. Enjoy</h3>
          <p>Receive your books and start reading right away!</p>
        </div>
      </div>
    </div>
  </section>
);

export default ExtraSectionOne;