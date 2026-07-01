export default function Impact() {
  const stats = [
    { label: "Lives Impacted", value: "5,000+" },
    { label: "Community Projects", value: "250+" },
    { label: "Active Volunteers", value: "150+" },
    { label: "Partner Organizations", value: "30+" },
    { label: "Training Sessions", value: "100+" },
    { label: "Communities Served", value: "20+" },
  ];

  return (
    // FIX: Set pt-0 to close the gap between WhyChooseUs and this section
    <section className="pt-0 pb-24 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-green-600 uppercase tracking-[0.2em] mb-4">Our Reach</h2>
          <p className="text-4xl md:text-5xl font-extrabold text-gray-900">Making a Difference Together</p>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg font-light">
            Every project represents hope restored, lives transformed, and communities 
            empowered through sustainable, Christ-centered action.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-green-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img 
              src="/image_322083.jpg" 
              alt="Community Impact" 
              className="rounded-3xl shadow-2xl w-full object-cover h-[500px]" 
            />
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl font-extrabold text-green-600 mb-2">{stat.value}</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}