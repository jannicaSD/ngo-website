import Link from "next/link";

export default function CTASection() {
  return (
    <section className="pt-0 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Card Container */}
        <div className="bg-[#0F1F11] rounded-[2.5rem] p-12 md:p-20 text-center shadow-2xl relative overflow-hidden">
          
          {/* Subtle Glow Effect for Depth */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Together We Can Build <br className="hidden md:block" /> Stronger Communities
            </h2>
            
            <p className="text-green-100/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Your support empowers us to provide life-changing resources, legal advocacy, and sustainable development. Join our mission today.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {/* Using Link instead of button for navigation */}
              <Link 
                href="/partner"
                className="group relative inline-flex items-center justify-center bg-green-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-green-500 transition-all shadow-[0_10px_20px_-10px_rgba(22,163,74,0.5)] hover:shadow-[0_20px_30px_-10px_rgba(22,163,74,0.6)] active:scale-[0.98]"
              >
                Partner With Us
              </Link>
              
              <Link 
                href="/volunteer"
                className="inline-flex items-center justify-center bg-white text-green-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg active:scale-[0.98]"
              >
                Become a Volunteer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}