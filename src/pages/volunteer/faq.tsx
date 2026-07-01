export function FAQ() {
  const faqs = [
    { q: "Who can volunteer?", a: "Anyone with a passion for service! Whether you are a student, professional, or retiree, there is a place for you." },
    { q: "Do I need experience?", a: "No prior experience is required for most roles. We provide full orientation and training for all new volunteers." },
    { q: "How much time is required?", a: "We offer flexible options, from one-time event support to recurring weekly commitments based on your schedule." },
    { q: "Can churches volunteer together?", a: "Absolutely. We love hosting church groups and community teams for impactful, collaborative service projects." },
    { q: "Will I receive training?", a: "Yes. Every volunteer receives a comprehensive orientation to ensure you feel confident and prepared for your role." },
  ];

  return (
    <section className="py-24 px-6 bg-gray-50 border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-16">Frequently Asked Questions</h2>
        <div className="grid gap-6">
          {faqs.map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h4 className="text-lg font-bold text-gray-900 mb-2">{item.q}</h4>
              <p className="text-gray-600 font-light leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;