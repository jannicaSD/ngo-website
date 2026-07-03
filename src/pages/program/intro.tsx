export default function Intro() {
  return (
    <section className="py-20 md:py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Fixed Header */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="inline-block px-4 py-1.5 bg-green-50 text-green-700 font-bold uppercase tracking-[0.2em] text-[10px] rounded-full mb-6">
                Our Commitment
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                Strategic <br /> Programs
              </h2>
              <div className="w-20 h-1.5 bg-green-600 rounded-full mb-10 lg:mb-0" />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-8 space-y-12">
            {/* Quote Block */}
            <div className="relative pl-8 border-l-4 border-green-600">
              <p className="text-xl md:text-2xl lg:text-3xl text-slate-800 font-medium leading-relaxed italic">
                &ldquo;Every program at Parakletus is designed to respond to real community needs with compassion, professionalism, and integrity.&rdquo;
              </p>
            </div>
            
            {/* Description Block */}
            <div className="p-8 md:p-10 bg-slate-50/80 rounded-3xl border border-slate-100 shadow-sm">
              <p className="text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed font-light">
                We believe lasting change comes through education, justice, healthcare, leadership, and community development rooted in Christian values. 
                Our initiatives serve vulnerable families, religious minorities, youth, women, children, and communities across Pakistan by 
                <span className="font-semibold text-slate-900 block mt-4">creating sustainable opportunities for growth, protection, and hope.</span>
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}