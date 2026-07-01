export default function Overview() {
  const stats = [
    { label: "Lives Impacted", value: "5,000+" },
    { label: "Community Projects", value: "300+" },
    { label: "Active Volunteers", value: "150+" },
    { label: "Community Partners", value: "40+" },
    { label: "Communities Served", value: "25+" },
    { label: "Families Assisted", value: "500+" },
  ];

  return (
    <section className="py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
          <div>
            <span className="text-green-600 font-bold uppercase tracking-[0.2em] text-xs">
              Impact Overview
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mt-6 leading-tight tracking-tight">
              Measuring Change <br /> 
              <span className="text-gray-500">Beyond Numbers</span>
            </h2>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              At Parakletus, impact is measured not only by the number of people served but by the lasting 
              transformation experienced by individuals, families, and communities.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-light border-l-4 border-green-600 pl-6">
              We empower people with opportunities, protect human dignity, and strengthen communities for 
              future generations through sustainable, compassionate service.
            </p>
          </div>
        </div>

        {/* Stats Grid - Professional Bento Style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="group p-6 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center justify-center text-center hover:bg-green-600 hover:shadow-2xl hover:shadow-green-600/20 transition-all duration-500 ease-out"
            >
              <div className="text-3xl lg:text-4xl font-extrabold text-green-700 group-hover:text-white mb-2 transition-colors">
                {stat.value}
              </div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-gray-400 group-hover:text-green-100 transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}