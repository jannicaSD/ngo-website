const steps = [
  { title: "Listen", desc: "Understanding needs through consultation." },
  { title: "Plan", desc: "Design sustainable, community-driven solutions." },
  { title: "Implement", desc: "Deliver programs with accountability." },
  { title: "Empower", desc: "Equip communities to be self-reliant." },
  { title: "Sustain", desc: "Measure impact for long-term growth." },
];

export default function Approach() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-16">How We Work</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-xl mb-4">
                {i + 1}
              </div>
              <h3 className="font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}