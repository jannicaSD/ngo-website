export function Partners() {
  const partners = [
    "Churches", "Community Orgs", "Legal Experts", 
    "Education", "Healthcare", "Volunteers", "Donors"
  ];

  return (
    // Reduced 'py-24' to 'pt-0 pb-24' to remove the top gap
    <section className="pt-0 pb-24 bg-white px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header Section */}
        <h2 className="text-[10px] font-bold text-green-600 uppercase tracking-[0.3em] mb-4">
          Strategic Partners
        </h2>
        <p className="text-gray-500 mb-16 max-w-xl mx-auto font-light">
          Meaningful impact is achieved through the unwavering support of our dedicated partners and contributors.
        </p>
        
        {/* Partner Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {partners.map((partner, i) => (
            <div 
              key={i} 
              className="h-20 flex items-center justify-center p-4 bg-gray-50 border border-gray-100 rounded-2xl hover:border-green-200 hover:bg-green-50/50 transition-all duration-300 group cursor-pointer"
            >
              <span className="text-[10px] font-bold text-gray-400 group-hover:text-green-700 uppercase tracking-widest text-center transition-colors">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;