import Footer from "../../component/footer";
import Navbar from "../../component/navbar";
import { Hero } from "./hero";
import { PartnerBenefits } from "./benefits";
import { WhyPartnerWithUs } from "./whypartner";
import { PartnerOpportunities } from "./partneropp";
import { WhyPartner } from "./partner";
import { PartnershipProcess } from "./process";
import {PartnershipForm} from "./partnershipform"


export default function Index() {
  return (
    <>
      <Navbar />

    <Hero />
    <PartnerBenefits />
    <WhyPartnerWithUs />
    <PartnerOpportunities />
    <WhyPartner />
    <PartnershipProcess />
    <PartnershipForm />

      <Footer />
    </>
  );
}