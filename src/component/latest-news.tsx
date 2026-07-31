import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

const newsItems = [
  {
    title: "Community Outreach",
    image: "/g6.jpeg",
    date: "June 15, 2026",
    desc: "Highlights from our recent medical camp and training session in the rural districts.",
  },
  {
    title: "Justice Seminar",
    image: "/g8.jpeg",
    date: "June 02, 2026",
    desc: "Advocating for human rights and legal awareness in local community centers.",
  },
  {
    title: "Youth Mentorship",
    image: "/g10.jpeg",
    date: "May 20, 2026",
    desc: "Empowering the next generation through career guidance and leadership workshops.",
  },
];

export default function LatestNews() {
  return (
    <section className="pt-0 pb-24 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div>
          <h2 className="text-sm font-bold text-green-600 uppercase tracking-[0.2em] mb-4">
            Blog & Updates
          </h2>

          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Latest News & Events
          </h3>
        </div>

        <Link
          href="/news"
          className="mt-6 md:mt-0 flex items-center gap-2 font-bold text-green-700 hover:text-green-800 transition"
        >
          View All Updates <ArrowRight size={20} />
        </Link>
      </div>

      {/* News Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {newsItems.map((news, i) => (
          <div
            key={i}
            className="group rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <Image
                src={news.image}
                alt={news.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                <Calendar size={14} />
                {news.date}
              </div>

              <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-green-700 transition-colors">
                {news.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light">
                {news.desc}
              </p>

              <Link
                href="/news"
                className="text-sm font-bold text-green-600 flex items-center gap-2 hover:text-green-700"
              >
                Read More <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}