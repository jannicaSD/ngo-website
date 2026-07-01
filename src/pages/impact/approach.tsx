export default function Approach() {
  const steps = [
    { num: "01", title: "Identify Needs", desc: "Listen to local voices and assess unique community challenges." },
    { num: "02", title: "Design Programs", desc: "Create evidence-based solutions built for long-term sustainability." },
    { num: "03", title: "Deliver Services", desc: "Execute with integrity, transparency, and compassionate action." },
    { num: "04", title: "Measure Results", desc: "Analyze impact data to continuously improve and expand." },
  ];

  return (
    // Added pt-24 (padding top) to ensure a distinct gap from the previous section
    // Added border-t border-white/5 for a premium "section break" feel
    <section className="pt-24 py-32 bg-gray-950 px-6 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header section with refined spacing */}
        <div className="text-center mb-24">
          <h2 className="text-green-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">
            Our Sustainable Approach
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            How We Create Lasting Change
          </h3>
        </div>

        {/* Step Grid */}
        <div className="grid md:grid-cols-4 gap-12 relative">
          {/* Decorative connecting line */}
          <div className="hidden md:block absolute top-[25px] left-0 w-full h-[1px] bg-gradient-to-r from-green-600/50 via-white/5 to-transparent z-0" />

          {steps.map((step, i) => (
            <div key={i} className="relative z-10 group">
              <div className="flex flex-col items-start">
                {/* Number Indicator with subtle hover glow */}
                <div className="w-12 h-12 rounded-full bg-gray-950 border border-green-600/50 flex items-center justify-center text-green-500 font-black text-lg mb-8 group-hover:bg-green-600 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(22,163,74,0.5)] transition-all duration-300">
                  {step.num}
                </div>
                
                {/* Content */}
                <h4 className="text-xl font-bold text-white mb-4 tracking-wide">{step.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}