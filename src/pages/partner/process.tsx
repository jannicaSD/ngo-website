export function PartnershipProcess() {
  const steps = [
    "Connect", "Discuss Shared Goals", "Develop Plan", 
    "Implement Together", "Measure Impact", "Long-Term Collaboration"
  ];

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-16">Our Partnership Process</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold mb-4 shadow-lg shadow-green-200">
                {i + 1}
              </div>
              <span className="text-sm font-bold text-gray-900">{step}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}