"use client";

import { useState } from "react";
import Footer from "@/src/component/footer";
import Navbar from "@/src/component/navbar";
import { Play } from "lucide-react";

const documentaries = [
  {
    id: 1,
    image: "/g18.jpeg",
    link: "#",
  },
  {
    id: 2,
    image: "/g19.jpeg",
    link: "#",
  },
  {
    id: 3,
    image: "/g20.jpeg",
    link: "#",
  },
  {
    id: 4,
    image: "/g22.jpeg",
    link: "#",
  },
  {
    id: 5,
    image: "/g23.jpeg",
    link: "#",
  },
  {
    id: 6,
    image: "/g2.jpeg",
    link: "#",
  },
  {
    id: 7,
    image: "/g10.jpeg",
    link: "#",
  },
  {
    id: 8,
    image: "/g21.jpeg",
    link: "#",
  },
  {
    id: 9,
    image: "/g18.jpeg",
    link: "#",
  },
  {
    id: 10,
    image: "/g19.jpeg",
    link: "#",
  },
  {
    id: 11,
    image: "/g20.jpeg",
    link: "#",
  },
  {
    id: 12,
    image: "/g24.jpeg",
    link: "#",
  },
  {
    id: 13,
    image: "/g25.jpeg",
    link: "#",
  },
  {
    id: 14,
    image: "/g26.jpeg",
    link: "#",
  },
  {
    id: 15,
    image: "/g27.jpeg",
    link: "#",
  },
  {
    id: 16,
    image: "/g28.jpeg",
    link: "#",
  },
  {
    id: 17,
    image: "/g29.jpeg",
    link: "#",
  },
  {
    id: 18,
    image: "/g30.jpeg",
    link: "#",
  },
  {
    id: 19,
    image: "/g31.jpeg",
    link: "#",
  },
];

const categories = [
  "Community Outreach",
  "Legal Clinics",
  "Healthcare",
  "Education",
  "Volunteer",
  "Youth",
  "Church Partnerships",
  "Women Empowerment",
];

export default function MediaGallery() {
  // Initialized to 3 so it shows precisely one row (3 items) initially
  const [visibleImages, setVisibleImages] = useState(3);

  const handleLoadMore = () => {
    setVisibleImages((prev) => Math.min(prev + 3, documentaries.length));
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />

      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 px-6 text-center border-b border-slate-200 bg-white">
          <span className="text-green-700 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
            Media Gallery
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Moments of Hope
          </h1>

          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Witness the transformation and impact of our initiatives across
            Pakistan through our visual stories.
          </p>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Categories */}
          <div className="flex flex-wrap gap-3 justify-center mb-16">
            {categories.map((category) => (
              <button
                key={category}
                className="px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-green-600 hover:text-green-700 transition shadow-sm cursor-pointer"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Story */}
          <section className="mb-24">
            <div className="grid lg:grid-cols-12 gap-10 items-center bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
              <div className="lg:col-span-7">
                <img
                  src="/g20.jpeg"
                  alt="Featured Story"
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>

              <div className="lg:col-span-5">
                <span className="text-green-700 font-bold text-xs uppercase tracking-widest">
                  Featured Story
                </span>

                <h2 className="text-3xl font-bold text-slate-900 mt-3 mb-5">
                  Empowering Future Generations
                </h2>

                <p className="text-slate-600 leading-relaxed mb-8">
                  A heartwarming look at our recent educational workshops where
                  local children discovered new opportunities for growth,
                  learning, and leadership.
                </p>

                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold transition cursor-pointer">
                  Read Full Story
                </button>
              </div>
            </div>
          </section>

          {/* Gallery */}
          <section>
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900">
                Documentaries & Stories
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {documentaries.slice(0, visibleImages).map((video) => (
                <a
                  href={video.link}
                  key={video.id}
                  className="group relative h-72 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 block bg-slate-200"
                >
                  <img
                    src={video.image}
                    alt="Gallery item"
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* Clean gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Minimal professional play button centered/positioned */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg transform scale-95 group-hover:scale-110 transition-all duration-300">
                      <Play
                        size={22}
                        className="text-green-700 fill-green-700 ml-0.5"
                      />
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Professional See More Button */}
            {visibleImages < documentaries.length && (
              <div className="flex justify-center mt-16">
                <button
                  onClick={handleLoadMore}
                  className="group relative inline-flex items-center gap-3 px-9 py-4 rounded-2xl bg-white border border-slate-200 text-slate-800 font-semibold hover:border-green-600 hover:text-green-700 hover:bg-green-50/50 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
                >
                  <span>See More Stories</span>
                  <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
                </button>
              </div>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}