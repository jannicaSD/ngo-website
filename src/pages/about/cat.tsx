import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto bg-green-900 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
        
        {/* Decorative ambient glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-green-500/20 blur-[100px] rounded-full" />
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Together We Can <span className="text-green-500">Transform Lives</span>
          </h2>
          
          <p className="text-green-100/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Whether you choose to volunteer, partner, or donate, your support helps build stronger communities through faith and sustainable action.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/volunteer"
              className="bg-green-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-green-500 transition-all shadow-lg hover:shadow-green-900/50 active:scale-[0.98]"
            >
              Become a Volunteer
            </Link>
            <Link 
              href="/partner"
              className="bg-white/5 text-white border border-white/10 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all active:scale-[0.98]"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}