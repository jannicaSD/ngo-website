import { Target, Eye } from "lucide-react";

export default function Mission() {
  return (
   <section className="pt-0 pb-24 bg-gradient-to-b from-white to-gray-50 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-bold text-green-600 uppercase tracking-[0.2em]">
            Foundational Pillars
          </h2>
          <p className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Driven by Purpose, Guided by Faith
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="group bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
            <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-8 text-green-700 group-hover:bg-green-700 group-hover:text-white transition-all duration-300">
              <Eye size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed text-lg font-light">
              A transformed society where every individual experiences dignity, 
              opportunity, hope, and the love of Christ.
            </p>
          </div>

          {/* Mission Card */}
          <div className="group bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
            <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-8 text-green-700 group-hover:bg-green-700 group-hover:text-white transition-all duration-300">
              <Target size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed text-lg font-light">
              To serve communities through Christ-centered programs that promote education, 
              healthcare, leadership development, humanitarian assistance, and 
              sustainable community transformation.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}