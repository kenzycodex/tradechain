"use client";

import { useEffect } from "react";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function StatsSection() {
  // Initialize AOS for scroll animations
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only animate once when the element comes into view
    });
  }, []);

  // Updated stats to reflect TradeChain's platform metrics
  const statsData = [
    {
      value: 520,
      label: "Successful Tokenizations",
    },
    {
      value: 900,
      label: "Global Traders",
    },
    {
      value: 330,
      label: "Commodities Traded",
    },
    {
      value: 55,
      label: "Marketplaces Supported",
    },
  ];

  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="bg-indigo-50 text-center rounded-lg shadow-lg p-4 transition-transform duration-300 ease-in-out transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`} // Staggered animation delay
            >
              <h3 className="text-3xl font-bold text-indigo-600 mb-1">
                <CountUp start={0} end={stat.value} duration={2} />+
              </h3>
              <p className="text-base font-medium text-indigo-800">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
