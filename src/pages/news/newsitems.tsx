import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const newsItems = [
  {
    category: "Human Rights",
    date: "July 02, 2026",
    title: "Advocating for Constitutional Rights in Punjab",
    summary: "Our legal team successfully concluded the latest advocacy session regarding human rights protections in local districts.",
    image: "/g5.jpeg" // Place your image in public/images/news/human-rights.jpg
  },
  {
    category: "Education",
    date: "June 28, 2026",
    title: "Literacy Initiative Expansion",
    summary: "Empowering 500+ students through our new digital literacy and scholarship coordination programs.",
    image: "/g17.jpeg" // Place your image in public/images/news/education.jpg
  },
  {
    category: "Healthcare",
    date: "June 25, 2026",
    title: "Medical Camps: Family Care Initiatives",
    summary: "Providing essential medical services to underserved communities, focusing on maternal and pediatric family health.",
    image: "/g18.jpeg" // Place your image in public/images/news/healthcare.jpg
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
              className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-green-700 bg-green-50 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-xs text-slate-400">{item.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-green-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                  {item.summary}
                </p>

                <Link href="#" className="inline-flex items-center gap-2 text-sm font-bold text-green-700 hover:gap-3 transition-all mt-auto">
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