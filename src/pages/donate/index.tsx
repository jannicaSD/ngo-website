import Footer from "../../component/footer";
import Navbar from "../../component/navbar";
import { FinalCallToAction } from "./cat";
import { TransparencyCommitment } from "./community";
import { ProfessionalDonationForm } from "./donationform";
import { DonationFAQ } from "./faq";
import {Hero} from "./hero";
import { ImpactAreas } from "./impactarea";
import { WaysToGive } from "./waytogive";
import { WhyGiftMatters } from "./whygiftmatter";

export default function Index() {
  return (
    <>
      <Navbar />

      <Hero />
      <WhyGiftMatters />
      <ImpactAreas />
      <WaysToGive />
      <TransparencyCommitment />
      <DonationFAQ />
      <ProfessionalDonationForm />
      <FinalCallToAction />

      <Footer />
    </>
  );
}