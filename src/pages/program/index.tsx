import Hero from "./hero";
import Intro from "./intro";
import LawJustice from "./lawjustice";
import Education from "./edu";
import CommunityDev from "./community";
import SpiritualDev from "./spiritual";
import Healthcare from "./healthcare";
import WomenEmpowerment from "./womenempower";
import YouthDev from "./youth";
import LeadershipDev from "./leadership";
import VolunteerPrograms from "./volunteer";
import FAQSection from "./faq";
import FinalCTA from "./cat";
import Footer from "@/src/component/footer";
import Navbar from "@/src/component/navbar";

export default function Index() {
  return (
    <main className="min-h-screen bg-white">
        <Navbar />
      <Hero />
      <Intro />
      
      {/* Primary Pillars */}
      <LawJustice />
      <Education />
      <CommunityDev />
      
      {/* Supporting Pillars */}
      <Healthcare />
      <WomenEmpowerment />
      <YouthDev />
      <LeadershipDev />
      <SpiritualDev />
      
      {/* Conversion Section */}
      <VolunteerPrograms />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}