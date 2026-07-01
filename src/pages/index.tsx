"use client";

import Navbar from "../component/navbar";
import Footer from "../component/footer";
import Hero from "../component/hero";
// import CounterSection from "../component/counter";
import WhoWeAre from "../component/whoweare"; // Ensure this matches your file name
import Mission from "../component/mission"; // Ensure this matches your file name
import ProgramsSection from "../component/program";
import WhyChooseUs from "../component/why-chooseus";
import ImpactSection from "../component/impact";
import SuccessStories from "../component/sucessstories";
import LatestNews from "../component/latest-news";
import Partners from "../component/partner";
import CTASection from "../component/cat"; // Fixed naming convention

export default function Index() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Navbar />
      
      {/* 1. Slider/Hero Section */}
      <Hero />

      {/* 2. Welcome to Parakletus */}
      <WhoWeAre />

      {/* 3. Mission & Vision */}
      <Mission />

      {/* 4. Programs */}
      <ProgramsSection />

      {/* 5. Why Choose Parakletus */}
      <WhyChooseUs />

      {/* 6. Impact & Stats (Includes image_322083.jpg) */}
      <ImpactSection />

      {/* 7. Featured Projects / Success Stories */}
      <SuccessStories />

      {/* 8. Latest News & Events */}
      <LatestNews />

      {/* 9. Partners & Sponsors */}
      <Partners />

      {/* 10. Final CTA Banner */}
      <CTASection />

      <Footer />
    </main>
  );
}