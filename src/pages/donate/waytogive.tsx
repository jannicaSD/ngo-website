export function WaysToGive() {
  const methods = [
    "One-Time Donation", "Monthly Giving", "Project Sponsorship", 
    "Education Sponsorship", "Healthcare Support", "Community Development Fund", 
    "Emergency Relief Fund"
  ];

  return (
    <section className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-12">Ways to Give</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {methods.map((method, i) => (
            <div key={i} className="p-6 border border-white/10 rounded-2xl hover:bg-green-600 transition-all cursor-pointer">
              <span className="font-semibold text-sm">{method}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}