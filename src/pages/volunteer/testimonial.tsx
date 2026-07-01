export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah A.",
      role: "Education Mentor",
      quote: "Volunteering with Parakletus changed my perspective on community service. It’s not just about giving; it’s about growing together.",
    },
    {
      name: "Ahmed K.",
      role: "Legal Assistant",
      quote: "The structured training and support made it easy to contribute effectively. I feel like I'm making a tangible difference.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-16">Volunteer Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 bg-gray-50 rounded-3xl border border-gray-100 italic">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center font-bold text-green-700">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{t.name}</div>
                  <div className="text-xs text-green-600 uppercase tracking-wider font-bold">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}