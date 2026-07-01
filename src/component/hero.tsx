"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./navbar";

const slides = [
  {
    image: "/slide-1.jpg",
    headline: "Justice with Compassion.",
    text: "Providing legal advocacy, human rights protection, and community development for vulnerable communities across Pakistan.",
    // Change #about to /about
    primary: { label: "Learn More", href: "/about" }, 
    // Change #contact to /contact
    secondary: { label: "Get Legal Support", href: "/contact" }, 
  },
  {
    image: "/slide-2.jpg",
    headline: "Building Hope Through Action",
    text: "Empowering communities through education, legal awareness, and sustainable development.",
    // Change #programs to /program
    primary: { label: "Our Programs", href: "/program" }, 
    // Change #volunteer to /volunteer
    secondary: { label: "Volunteer", href: "/volunteer" }, 
  },
  {
    image: "/slide-3.jpg",
    headline: "Serving Together.",
    text: "Connecting churches, lawyers, volunteers, and communities to promote justice, dignity, and peace.",
    // Change #contact to /partner
    primary: { label: "Partner With Us", href: "/partner" }, 
    // Change #donate to /donate
    secondary: { label: "Donate", href: "/donate" }, 
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(slideTimer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-neutral-900">
      <Navbar />

      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slides[activeSlide].image}
            alt="Hero Background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Progress Indicators */}
      <div className="absolute bottom-10 left-6 lg:left-20 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              activeSlide === index ? "w-10 bg-green-500" : "w-4 bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-6 lg:px-20">
        <motion.div
          key={activeSlide}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-3xl space-y-8"
        >
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl leading-[1.1]">
            {slides[activeSlide].headline}
          </h1>
          <p className="text-lg text-gray-200 sm:text-xl leading-relaxed max-w-2xl font-light">
            {slides[activeSlide].text}
          </p>

      <div className="flex flex-wrap gap-4 pt-4">
  {/* Primary Button: Added a brighter green and a subtle inner shadow */}
  <Link
    href={slides[activeSlide].primary.href}
    className="group relative rounded-full bg-green-500 px-8 py-4 font-bold text-white shadow-lg transition-all hover:bg-green-400 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] active:scale-95"
  >
    <span className="relative z-10">{slides[activeSlide].primary.label}</span>
  </Link>

  {/* Secondary Button: Increased contrast and added a slight white glow on hover */}
  <Link
    href={slides[activeSlide].secondary.href}
    className="rounded-full border-2 border-white/50 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:border-white hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-95"
  >
    {slides[activeSlide].secondary.label}
  </Link>
</div>
        </motion.div>
      </div>
    </section>
  );
}