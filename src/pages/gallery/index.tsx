import Footer from "@/src/component/footer";
import Navbar from "@/src/component/navbar";
import { Play } from "lucide-react";

const categories = [
  "Community Outreach", "Legal Clinics", "Healthcare", "Education", 
  "Volunteer", "Youth", "Church Partnerships", "Women Empowerment"
];

export default function MediaGallery() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />
      
      {/* ADDED pt-24 TO PUSH CONTENT BELOW FIXED NAVBAR */}
      <main className="pt-24"> 
        
        {/* HERO BANNER */}
        <section className="py-20 px-6 text-center border-b border-slate-200 bg-white">
          <span className="text-green-700 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Media Gallery</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">Moments of Hope</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Witness the transformation and impact of our initiatives across Pakistan through our visual stories.
          </p>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-16">
          
          {/* CATEGORIES - UPDATED FOR BETTER RESPONSIVENESS */}
          <div className="flex flex-wrap gap-2 mb-16 justify-center">
            {categories.map((cat) => (
              <button key={cat} className="px-5 py-2 bg-white border border-slate-200 hover:border-green-600 hover:text-green-700 rounded-lg text-sm font-medium text-slate-600 transition-all shadow-sm">
                {cat}
              </button>
            ))}
          </div>

          {/* FEATURED STORY */}
          <section className="mb-24">
            <div className="grid lg:grid-cols-12 gap-12 items-center bg-white p-6 md:p-10 rounded-3xl border border-slate-100 shadow-sm">
              <div className="lg:col-span-7">
                <img 
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=1200" 
                  alt="Child support" 
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="lg:col-span-5">
                <span className="text-green-700 font-bold text-xs uppercase tracking-widest">Featured Story</span>
                <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-4">Empowering Future Generations</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  A heartwarming look at our recent educational workshops where local children discovered new opportunities for growth, learning, and skill development in their communities.
                </p>
                <button className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-700 transition-all">Read Full Story</button>
              </div>
            </div>
          </section>

          {/* VIDEO GALLERY */}
          <section>
            <div className="flex justify-between items-end mb-8">
              <h2 className="text-2xl font-bold text-slate-900">Documentaries & Stories</h2>
              <span className="text-sm text-green-700 font-semibold cursor-pointer hover:underline">View all videos</span>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="group relative h-72 bg-slate-200 rounded-3xl overflow-hidden cursor-pointer shadow-md">
                  <img src={`https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-all" />
                  <div className="absolute bottom-6 left-6">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play size={20} className="text-green-700 fill-green-700" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}