import { Heart, ShieldCheck, Users, Cross, Leaf, Star } from "lucide-react";

const values = [
  {
    title: "Compassion",
    icon: Heart,
    description: "Serving individuals with kindness and genuine care, regardless of background or circumstance.",
  },
  {
    title: "Integrity",
    icon: ShieldCheck,
    description: "Upholding transparency, accountability, and ethical leadership in every action we take.",
  },
  {
    title: "Community",
    icon: Users,
    description: "Fostering transformation through collective action, partnerships, and shared goals.",
  },
  {
    title: "Faith",
    icon: Cross,
    description: "Rooted in Christian values and inspired by a calling to serve those in need with love.",
  },
  {
    title: "Sustainability",
    icon: Leaf,
    description: "Creating long-term, impactful solutions that empower generations to thrive.",
  },
  {
    title: "Excellence",
    icon: Star,
    description: "Pursuing the highest standards in our programs, partnerships, and community outreach.",
  },
];

export default function Value() {
  return (
   <section className="bg-white py-20"> 
      <div className="max-w-7xl mx-auto px-6">
        
        {/* If the gap is here, ensure the first div has no top margin */}
        <div className="mb-16 md:flex items-end justify-between border-b border-gray-200 pb-12 mt-0">
          <div className="max-w-xl">
            <h3 className="text-xs font-bold text-green-700 uppercase tracking-[0.3em] mb-4">
              Our Core Values
            </h3>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Principles That Drive <br /> Our Mission
            </h2>
          </div>
          <p className="text-gray-500 mt-6 md:mt-0 max-w-sm font-light leading-relaxed">
            These guiding principles form the foundation of our work.
          </p>
        </div>

        {/* Bento-Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <div
              key={i}
              className="group relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-green-100"
            >
              <div className="flex flex-col h-full">
                <div className="mb-8">
                  <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                    <value.icon size={24} strokeWidth={2} />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">
                  {value.title}
                </h3>

                <p className="text-gray-500 leading-relaxed font-light text-[15px]">
                  {value.description}
                </p>
              </div>
              
              {/* Subtle line indicator on hover */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-green-600 rounded-t-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}