"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

// FAQ Data
const faqData = [
  {
    question: "How does TradeChain ensure secure transactions?",
    answer:
      "TradeChain uses end-to-end encryption, multi-factor authentication, and blockchain technology to provide secure and transparent transactions for commodity trading.",
  },
  {
    question: "What types of commodities can I trade?",
    answer:
      "You can trade a wide range of commodities including precious metals, agricultural products, energy commodities, and cryptocurrencies.",
  },
  {
    question: "How can I tokenize my assets on TradeChain?",
    answer:
      "Tokenizing your assets on TradeChain is simple. You can follow the guided process through our platform to convert your physical assets into digital tokens for easier trading.",
  },
  {
    question: "Is there a fee for using TradeChain?",
    answer:
      "TradeChain charges a small fee for transactions. These fees cover operational costs and ensure the highest levels of security and service.",
  },
  {
    question: "How can I join the TradeChain community?",
    answer:
      "You can sign up for a TradeChain account and immediately gain access to our global network of traders, investors, and commodity professionals.",
  },
  {
    question: "What customer support does TradeChain offer?",
    answer:
      "TradeChain offers 24/7 customer support to ensure that your trading experience is smooth and efficient. You can contact us anytime for assistance.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Toggle FAQ Functionality
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12"> {/* Adjusted lg:px */}
        {/* FAQ Header */}
        <h2 className="text-3xl font-bold text-center text-indigo-200 mb-8">
          Frequently Asked Questions
        </h2>

        {/* FAQ Items in Single Column */}
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`border border-gray-300 rounded-lg transition-all duration-500 ease-in-out ${
                openIndex === index ? "bg-indigo-50 shadow-lg" : "bg-white"
              }`}
            >
              {/* Question Section */}
              <div
                className="flex justify-between items-center p-3 cursor-pointer"
                onClick={() => toggleFAQ(index)}
                onKeyDown={(e) => e.key === "Enter" && toggleFAQ(index)}
                role="button"
                tabIndex={0}
                aria-expanded={openIndex === index ? "true" : "false"}
                aria-controls={`faq-content-${index}`}
              >
                <h3 className="font-semibold text-lg text-indigo-800">
                  {faq.question}
                </h3>
                <div className="text-indigo-500">
                  {openIndex === index ? (
                    <FaMinus className="text-xl" />
                  ) : (
                    <FaPlus className="text-xl" />
                  )}
                </div>
              </div>

              {/* Answer Section */}
              <div
                id={`faq-content-${index}`}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-[1000px] opacity-100 p-4" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-indigo-200">
            Still Have any Questions?
          </h3>
          <a
            href="/contact"
            className="inline-block mt-4 px-4 py-2 bg-white text-indigo-600 border border-indigo-600 rounded-lg shadow hover:bg-gray-100 transition duration-300"
          >
            Contact Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
