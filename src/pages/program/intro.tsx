export default function Intro() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Fixed Header with subtle accent */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="inline-block px-4 py-1.5 bg-green-50 text-green-700 font-bold uppercase tracking-[0.2em] text-[10px] rounded-full mb-6">
              Our Commitment
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6">
              Strategic <br /> Programs
            </h2>
            <div className="w-20 h-1.5 bg-green-600 rounded-full" />
          </div>

          {/* Right Column: High-impact typography */}
          <div className="lg:col-span-8 space-y-12">
            <div className="relative pl-8 border-l-4 border-green-600">
              <p className="text-2xl md:text-3xl text-gray-900 font-medium leading-relaxed italic">
                &ldquo;Every program at Parakletus is designed to respond to real community needs with compassion, professionalism, and integrity.&rdquo;
              </p>
            </div>
            
            <div className="p-10 bg-gray-50/50 rounded-3xl border border-gray-100 shadow-sm">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                We believe lasting change comes through education, justice, healthcare, leadership, and community development rooted in Christian values. 
                Our initiatives serve vulnerable families, religious minorities, youth, women, children, and communities across Pakistan by 
                <span className="font-medium text-gray-900"> creating sustainable opportunities for growth, protection, and hope.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}