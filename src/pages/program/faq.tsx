"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Who can receive assistance?",
    a: "Individuals and communities who meet our program criteria, with a primary focus on vulnerable groups, religious minorities, and those facing systemic hardship."
  },
  {
    q: "Who can volunteer?",
    a: "Anyone who shares our core values of justice, compassion, and integrity, and has a heart for serving the community is welcome to join our volunteer network."
  },
  {
    q: "Are your legal services free?",
    a: "We strive to make justice accessible. Support is provided based on the nature of each case, the vulnerability of the client, and our available resources."
  },
  {
    q: "How can churches partner with Parakletus?",
    a: "We welcome church partnerships through community outreach, volunteer engagement, leadership development training, and joint humanitarian initiatives."
  },
  {
    q: "How can I donate?",
    a: "Donations can be made through our official secure channels on our website. Every contribution directly supports our programs and community service efforts."
  },
  {
    q: "Where do you operate?",
    a: "We primarily serve communities across Pakistan, working closely with local churches, grassroots volunteers, and partner organizations to ensure localized impact."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
          <p className="mt-4 text-gray-600">Got questions? We have the answers you need.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-left"
              >
                <span className="font-bold text-gray-900">{faq.q}</span>
                {openIndex === i ? <Minus size={20} className="text-green-600" /> : <Plus size={20} className="text-gray-400" />}
              </button>
              
              {openIndex === i && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed animate-in slide-in-from-top-2 duration-300">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}