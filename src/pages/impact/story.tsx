export default function Story() {
  const stories = [
    { title: "Education Success", quote: "A scholarship enabled a young student to continue their education and pursue higher studies." },
    { title: "Legal Support", quote: "A vulnerable family received legal guidance that helped them protect their rights." },
    { title: "Community Development", quote: "Local volunteers worked together to improve community facilities and strengthen collaboration." },
  ];

  return (
    <section className="py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
           <span className="text-green-600 font-bold uppercase tracking-[0.3em] text-[10px]">Impact Stories</span>
           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4">Stories of Hope</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <div 
              key={i} 
              className="relative p-10 bg-white rounded-3xl border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(22,163,74,0.15)] transition-all duration-500 group"
            >
              <div className="text-green-600 text-[10px] font-bold uppercase tracking-widest mb-4 block">
                {story.title}
              </div>
              <p className="text-xl text-gray-700 italic leading-relaxed font-light mb-8">
                "{story.quote}"
              </p>
              {/* Decorative indicator */}
              <div className="h-1 w-12 bg-green-500 rounded-full group-hover:w-20 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}