import Footer from "../../component/footer";
import Navbar from "../../component/navbar";
import ContactHero from "./hero";
import ContactDetails from "./details";
import ImmediateHelp from "./help";

export default function Index() {
  return (
<> 

    <Navbar />
    <ContactHero />
    <ContactDetails />
    {/* <ContactHub /> */}
    <ImmediateHelp />

      <Footer />
      
       </>
  

  );
}