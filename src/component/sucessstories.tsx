import { Quote, Star } from "lucide-react";

export default function SuccessStories() {
  const stories = [
    {
      quote: "Parakletus changed my family's future through their vocational training. I now have the skills to sustain my household.",
      name: "Maria Khan",
      title: "Vocational Program Beneficiary"
    },
    {
      quote: "The legal support I received was life-changing. They stood by me when I had no one else to turn to for justice.",
      name: "Ahmed Raza",
      title: "Legal Aid Recipient"
    }
  ];

  return (
    // FIX: Set pt-0 to close the gap between Impact and this section
    <section className="pt-0 pb-24 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-green-600 uppercase tracking-[0.2em] mb-4">Testimonials</h2>
          <p className="text-4xl md:text-5xl font-extrabold text-gray-900">Voices of Transformation</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {stories.map((story, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
              <Quote className="absolute top-6 right-6 text-green-100 group-hover:text-green-200 transition-colors" size={64} />
              
              <div className="flex text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              
              <p className="text-lg text-gray-600 italic leading-relaxed mb-8">"{story.quote}"</p>
              
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center font-bold text-green-700">
                  {story.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{story.name}</h4>
                  <p className="text-sm text-green-600 font-medium">{story.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}