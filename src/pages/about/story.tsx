export default function Story() {
  const timeline = [
    { label: "Founded", desc: "Established with a vision to address the physical, social, legal, and spiritual needs of vulnerable communities." },
    { label: "Community Outreach", desc: "Launched foundational programs to support marginalized individuals, establishing our core commitment to grassroots service." },
    { label: "Education Programs", desc: "Expanded our reach by launching formal education and literacy initiatives for children and youth." },
    { label: "Legal Advocacy", desc: "Began providing professional legal assistance and rights awareness to protect vulnerable populations." },
    { label: "Community Development", desc: "Integrated sustainable infrastructure projects, clean water, and livelihood support systems." },
    { label: "Future Growth", desc: "Continuing our expansion with a focus on national-scale leadership development and community resilience." },
  ];

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <span className="text-sm font-bold text-green-600 uppercase tracking-[0.2em] mb-4 block">
            Our History
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-8 tracking-tight">
            Our Journey
          </h2>
          
          <div className="text-lg md:text-xl text-gray-600 leading-relaxed font-light space-y-6 max-w-3xl mx-auto">
            <p>
              Parakletus was established with a vision to respond to the physical, social, legal, and spiritual needs of vulnerable communities.
            </p>
            <p className="text-gray-900 font-medium">
              Recognizing the challenges faced by marginalized individuals and religious minorities, our founders envisioned an organization that combines faith, professional service, and community collaboration.
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="relative space-y-12 pl-4 md:pl-0">
          {/* Vertical line that only shows on md screens and up */}
          <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-0.5 bg-green-100 hidden md:block" />

          {timeline.map((item, i) => (
            <div 
              key={i} 
              className={`relative flex flex-col md:flex-row gap-8 md:gap-16 ${i % 2 === 0 ? "md:text-right" : "md:flex-row-reverse"}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[15px] md:left-1/2 -ml-[9px] top-0 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg" />
              
              {/* Content Space */}
              <div className="flex-1 pl-12 md:pl-0 pt-1 md:pt-0">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.label}</h3>
                <p className="text-gray-600 leading-relaxed font-light">{item.desc}</p>
              </div>
              
              {/* Spacer for symmetry */}
              <div className="hidden md:block flex-1" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}