import { ArrowUpRight, Target } from "lucide-react";

export function LookingAhead() {
  const priorities = [
    "Expanding educational initiatives",
    "Increasing legal aid services",
    "Strengthening healthcare outreach",
    "Empowering women and youth",
    "Building community partnerships",
    "Growing volunteer engagement",
  ];

  return (
    <section className="py-32 px-6 bg-gray-50 relative overflow-hidden">
      {/* Subtle light-mode glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-200/30 blur-[128px] rounded-full -translate-y-1/2 translate-x-1/3" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side: The Vision */}
        <div>
          <span className="text-green-600 font-bold uppercase tracking-[0.3em] text-[10px]">Future Outlook</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-6 mb-8 leading-tight">
            The Future We Are <br/>
            <span className="text-green-600">Building Together</span>
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
            Our vision is to expand programs that provide education, justice, healthcare, 
            and sustainable support so that more individuals and families can experience 
            genuine hope and opportunity.
          </p>
          <button className="flex items-center gap-2 text-gray-900 font-bold hover:text-green-600 transition-colors group">
            Read Our Strategic Roadmap 
            <ArrowUpRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Side: Priority Cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {priorities.map((item, i) => (
            <div 
              key={i} 
              className="p-8 bg-white border border-gray-100 rounded-3xl flex items-center gap-4 hover:border-green-200 hover:shadow-xl hover:shadow-green-500/5 transition-all duration-500"
            >
              <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                <Target size={18} className="text-green-600" />
              </div>
              <span className="text-sm font-semibold text-gray-700">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}