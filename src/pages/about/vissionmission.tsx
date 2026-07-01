export default function VisionMission() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
        
        {/* VISION CARD - Clean & Reflective */}
        <div className="group relative bg-white p-12 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
          {/* Subtle Accent Element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-[100px] transition-transform group-hover:scale-110" />
          
          <div className="relative mb-6">
            <span className="text-green-600 font-bold uppercase tracking-[0.2em] text-xs">Our Vision</span>
          </div>
          <h2 className="relative text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
            A Future Defined by <br /> Dignity & Hope
          </h2>
          <p className="relative text-lg text-gray-600 leading-relaxed italic border-l-2 border-green-500 pl-6">
            "A society where every individual experiences dignity, justice, opportunity, and hope, living in communities strengthened by compassion, equality, and Christian values."
          </p>
        </div>

        {/* MISSION CARD - Bold & Active */}
        <div className="group relative bg-green-900 p-12 rounded-3xl text-white shadow-xl hover:bg-green-950 transition-all duration-500 overflow-hidden">
          {/* Subtle Pattern/Overlay */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          
          <div className="relative mb-6">
            <span className="text-green-400 font-bold uppercase tracking-[0.2em] text-xs">Our Mission</span>
          </div>
          <h2 className="relative text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
            Empowering Lives <br /> Through Action
          </h2>
          <p className="relative text-lg text-green-100 leading-relaxed font-light">
            To serve vulnerable communities through education, healthcare, legal advocacy, humanitarian assistance, leadership development, and sustainable community development while demonstrating the love of Christ through practical action.
          </p>
          
          {/* Subtle Call to Action indicator */}
          <div className="mt-8 flex items-center text-green-400 text-sm font-semibold uppercase tracking-wider group-hover:gap-2 transition-all">
            Learn more about our work →
          </div>
        </div>

      </div>
    </section>
  );
}