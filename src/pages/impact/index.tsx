import Navbar from "@/src/component/navbar";
import Footer from "@/src/component/footer";

// Importing design components
import Hero from "./hero";
import Overview from "./overview";
import Area from "./area";
import { Partners } from "./partner";
import { Transparency } from "./transparency";
import { LookingAhead } from "./lookingahead";
import Approach from "./approach";
import Story from "./story";
import { CallToAction } from "./cat";


export default function Index() {
  return (
    <main className="bg-gray-950 min-h-screen text-white">
      <Navbar />

      {/* Hero: The Vision */}
      <Hero />
      
      {/* Overview: The Data */}
      <Overview />
      
      {/* Areas: What we do */}
      <Area />
      
      {/* Approach: How we do it */}
      <Approach />
      
      {/* Stories: Humanizing the impact */}
      <Story />
      
      {/* Looking Ahead: Future strategy */}
      <LookingAhead />
      
      {/* Partners & Transparency: Trust signals */}
      <Partners />
      <Transparency />
      
      {/* Final Conversion */}
      <CallToAction />

      <Footer />
    </main>
  );
}