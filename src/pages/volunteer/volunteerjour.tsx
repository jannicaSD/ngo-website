export function VolunteerJourney() {
  const steps = [
    "Submit Application",
    "Interview & Orientation",
    "Training",
    "Community Placement",
    "Ongoing Support",
    "Recognition & Growth"
  ];

  return (
    <section className="py-24 px-6 bg-gray-50 border-t border-gray-100">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-16">The Volunteer Journey</h2>
        
        <div className="space-y-4">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Step Card */}
              <div className="relative z-10 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-green-300 transition-colors">
                <span className="text-green-600 font-bold text-sm tracking-widest uppercase">Step 0{i + 1}</span>
                <h4 className="text-xl font-bold text-gray-900 mt-1">{step}</h4>
              </div>
              
              {/* Connector line (except for the last step) */}
              {i < steps.length - 1 && (
                <div className="absolute left-1/2 -bottom-4 w-0.5 h-8 bg-green-200 z-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VolunteerJourney;