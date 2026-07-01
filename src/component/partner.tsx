export default function Partners() {
  const partners = ["Grace Foundation", "Unity Church", "Global Relief", "TechCare Corp", "Justice Initiative"];

  return (
    // FIX: pt-0 creates a tight, professional connection to the section above
    <section className="pt-0 pb-20 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">
            Our Trusted Partners
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {partners.map((partner, i) => (
            <div 
              key={i} 
              className="group w-full py-6 px-4 flex items-center justify-center rounded-2xl border border-transparent hover:border-gray-100 hover:bg-gray-50 transition-all duration-300"
            >
              <span className="text-gray-400 font-extrabold text-lg uppercase tracking-wider group-hover:text-green-700 transition-colors duration-300">
                {partner}
              </span>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}