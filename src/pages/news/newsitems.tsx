import Link from "next/link";
import { ArrowRight } from "lucide-react";

const newsItems = [
  {
    category: "Human Rights",
    date: "July 02, 2026",
    title: "Advocating for Constitutional Rights in Punjab",
    summary: "Our legal team successfully concluded the latest advocacy session regarding human rights protections in local districts.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqErhkb4S00yN9LT7yNeKTxLSBA_1lzXH5J1RsnacpesJJiS31srdzibJy&s=10"
  },
  {
    category: "Education",
    date: "June 28, 2026",
    title: "Literacy Initiative Expansion",
    summary: "Empowering 500+ students through our new digital literacy and scholarship coordination programs.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800"
  },
  {
    category: "Healthcare",
    date: "June 25, 2026",
    title: "Medical Camps: Family Care Initiatives",
    summary: "Providing essential medical services to underserved communities, focusing on maternal and pediatric family health.",
    image: "https://images.stockcake.com/public/8/8/1/8819badf-cfed-4fff-a19c-da2f80755ba7_medium/rural-medical-camp-stockcake.jpg"
  }
];

export default function NewsGrid() {
  return (
    <section id="latest-news" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6">
          <div>
            <h3 className="text-green-700 font-bold uppercase tracking-[0.2em] text-[12px] mb-3">Latest Insights</h3>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-2">Updates from the Frontlines</h2>
            <p className="text-slate-500">Stories of impact and community transformation.</p>
          </div>
          <Link href="/news" className="text-green-700 font-bold flex items-center gap-2 hover:text-green-800 transition-colors">
            View All News <ArrowRight size={18} />
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, idx) => (
            <article 
              key={idx} 
              className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-green-700 bg-green-50 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-xs text-slate-400">{item.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-green-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {item.summary}
                </p>

                <Link href="#" className="inline-flex items-center gap-2 text-sm font-bold text-green-700 hover:gap-3 transition-all">
                  Read Full Story <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}