import Image from 'next/image';

const services = [
  { title: "Education", description: "Empowering youth through school support, learning resources, and leadership development programs.", image: "/images/about/education.jpg" },
  { title: "Healthcare", description: "Providing vital medical outreach, health awareness, and community wellness initiatives.", image: "/images/about/healthcare.jpg" },
  { title: "Community Development", description: "Supporting sustainable livelihoods, clean water, and economic empowerment for all.", image: "/images/about/community.jpg" },
  { title: "Humanitarian Relief", description: "Responding to urgent needs with food distribution, shelter, and essential support systems.", image: "/images/about/relief.jpg" },
  { title: "Women & Youth", description: "Equipping women and young people with practical life skills and leadership training.", image: "/images/about/women.jpg" },
  { title: "Spiritual Development", description: "Strengthening community foundations through discipleship, counseling, and faith-based support.", image: "/images/about/spiritual.jpg" },
];

export default function WhatWeDo() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Editorial Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-green-600 font-bold uppercase tracking-[0.3em] text-xs">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 tracking-tight">
            Transforming Lives Through Meaningful Programs
          </h2>
          <p className="mt-6 text-lg text-gray-500 font-light leading-relaxed">
            Every initiative is designed to empower individuals and create sustainable opportunities for long-term community growth.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Subtle dark overlay for readability if needed */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-light text-[15px]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}