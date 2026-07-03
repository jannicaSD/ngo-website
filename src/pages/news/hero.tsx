import Link from "next/link";

export default function NewsHero() {
  return (
    // Updated bg to a slightly softer, rich charcoal-green instead of pure black
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-6 border-b border-white/5 bg-[#0a1410] overflow-hidden">
      
      {/* Subtle Background Glow - Softened to look like light reflecting on glass */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-green-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Tag - Added a subtle backdrop blur for a more premium look */}
        <span className="inline-block py-1.5 px-5 mb-6 text-[11px] font-bold tracking-[0.2em] uppercase text-green-400 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
          Journal & Updates
        </span>

        {/* Heading - Used a softer white for less harsh contrast */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-gray-100 mb-8 leading-tight">
          News & Events
        </h1>

        {/* Subtitle - Increased readability with slightly lighter gray */}
        <p className="text-base sm:text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed mb-12">
          Stay informed about our latest programs, community initiatives, legal advocacy, humanitarian activities, and upcoming events across Pakistan.
        </p>

        {/* Action Buttons - Used softer background colors */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
          <Link 
            href="#latest-news" 
            className="w-full sm:w-auto px-8 py-4 font-bold bg-green-600 hover:bg-green-500 text-white rounded-xl transition-all shadow-[0_0_20px_rgba(22,163,74,0.3)] active:scale-[0.98]"
          >
            Latest News
          </Link>
<Link 
  href="#upcoming-events" 
  className="px-8 py-4 font-bold text-white transition-all border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 active:scale-95 rounded-xl"
>
  Upcoming Events
</Link>
        </div>
      </div>
    </section>
  );
}