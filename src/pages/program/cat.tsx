import Link from 'next/link';
import { Heart, UserPlus, Handshake, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-emerald-900 via-green-950 to-gray-950 border border-emerald-800/40 p-12 md:p-20 text-center shadow-2xl shadow-green-950/20">
          
          {/* Decorative glowing ambient backdrops */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/20 text-green-300 text-xs font-semibold tracking-widest uppercase border border-green-500/30 mb-6">
              Take Action
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Join Us in Transforming Lives
            </h2>
            <p className="text-lg md:text-xl text-emerald-100/80 mb-12 leading-relaxed font-light">
              Every act of kindness creates lasting change. Your support helps strengthen communities, protect human dignity, and bring hope to those who need it most. Together, we can build a future rooted in compassion, justice, and service.
            </p>

            {/* Action Buttons Grid with Next.js Routing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <Link 
                href="/donate" 
                className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-500 transition-all active:scale-95 flex items-center justify-center gap-3 shadow-lg shadow-green-900/40 group"
              >
                <Heart className="w-5 h-5 text-rose-300 fill-rose-300 group-hover:scale-110 transition-transform" />
                Donate Now
              </Link>
              
              <Link 
                href="/volunteer" 
                className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold border border-white/20 hover:bg-white hover:text-emerald-900 hover:border-white transition-all duration-300 active:scale-95 flex items-center justify-center gap-3 group shadow-lg"
              >
                <UserPlus className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
                Become a Volunteer
              </Link>
              
              <Link 
                href="/partner" 
                className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold border border-white/20 hover:bg-white hover:text-emerald-900 hover:border-white transition-all duration-300 active:scale-95 flex items-center justify-center gap-3 group shadow-lg"
              >
                <Handshake className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
                Partner With Us
              </Link>
              
              <Link 
                href="/contact" 
                className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold border border-white/20 hover:bg-white hover:text-emerald-900 hover:border-white transition-all duration-300 active:scale-95 flex items-center justify-center gap-3 group shadow-lg"
              >
                <Mail className="w-5 h-5 text-gray-300 group-hover:scale-110 transition-transform" />
                Contact Us
              </Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}