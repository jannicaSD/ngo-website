import Footer from "../../component/footer";
import Navbar from "../../component/navbar";
import { FAQ } from "./faq";
import { Form } from "./from";
import { Hero } from "./hero";
import { Testimonials } from "./testimonial";
import { VolunteerJourney } from "./volunteerjour";
import { VolunteerOpportunities } from "./volunteeropp";
import { WhyJoinUs } from "./whyjoinus";
import { WhyVolunteer } from "./whyvolunteer";




export default function Index() {
  return (
    <>
      <Navbar />

      
        <Hero />
        <WhyVolunteer />
        <VolunteerOpportunities />
        <WhyJoinUs />
        <VolunteerJourney />
        <Testimonials />
        <FAQ />
        <Form />
  


      <Footer />
    </>
  );
}