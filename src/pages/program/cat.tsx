export default function CTA() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-[3rem] overflow-hidden bg-green-900 p-12 md:p-20 text-center shadow-2xl">
          
          {/* Decorative background element */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-green-600/20 to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">
              Join Us in Transforming Lives
            </h2>
            <p className="text-lg md:text-xl text-green-100 mb-12 leading-relaxed font-light">
              Every act of kindness creates lasting change. Your support helps strengthen communities, protect human dignity, and bring hope to those who need it most. Together, we can build a future rooted in compassion, justice, and service.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button className="bg-white text-green-900 px-8 py-4 rounded-xl font-bold hover:bg-green-50 transition-all active:scale-95 flex items-center justify-center gap-2">
                ❤️ Donate Now
              </button>
              <button className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition-all active:scale-95 flex items-center justify-center gap-2">
                🤝 Become a Volunteer
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all active:scale-95 flex items-center justify-center gap-2">
                🏛 Partner With Us
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all active:scale-95 flex items-center justify-center gap-2">
                📞 Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}