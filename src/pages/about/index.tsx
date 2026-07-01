import Navbar from "@/src/component/navbar";
import Footer from "@/src/component/footer";

import Hero from "./hero";
import Story from "./story";
import Mission from "../../component/mission";
import Value from "./value";
import Impact from "./impact";
import WhoWeAre from "./whoweare";
import WhatWeDo from "./whatwedo";
import LeaderShip from  "./leadership";
import CAT from "./cat";


export default function About() {
  return (
    <>
      <Navbar />

      <Hero />
      <Story />
      <Mission />
      <Value />
      <Impact />
      <WhoWeAre />
      <WhatWeDo />
      <LeaderShip />
      <CAT />
      <Footer />
    </>
  );
}