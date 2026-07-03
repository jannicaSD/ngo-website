export default function ContactHero() {
  return (
    <section className="relative py-24 md:py-32 px-6 bg-slate-50 overflow-hidden">
      {/* Decorative background element for depth */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-100 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Decorative Tag */}
        <span className="inline-block py-1.5 px-5 mb-6 text-[11px] font-bold tracking-[0.2em] uppercase text-green-700 bg-green-100/50 rounded-full border border-green-200">
          Contact Us
        </span>

        {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8">
          We&apos;re Here to Listen, <br className="hidden md:block" /> Support, and Serve
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
          Whether you are seeking legal assistance, exploring partnership opportunities, volunteering, or simply learning more about our work, we welcome your message.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
          <button className="w-full sm:w-auto px-8 py-4 font-bold bg-green-600 hover:bg-green-700 text-white rounded-xl transition-all shadow-lg shadow-green-600/20 active:scale-[0.98]">
            Get in Touch
          </button>
          <button className="w-full sm:w-auto px-8 py-4 font-bold border border-slate-200 bg-white hover:bg-slate-50 text-slate-900 rounded-xl transition-all active:scale-[0.98]">
            Request Assistance
          </button>
        </div>
      </div>
    </section>
  );
}