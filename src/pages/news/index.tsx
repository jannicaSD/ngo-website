import Footer from "../../component/footer";
import Navbar from "../../component/navbar";
import Hero from "./hero";
import Event from "./event";
import NewsItems from "./newsitems";
import NewsLetter from "./newsletter";

export default function Index() {
  return (
    <>
      <Navbar />

     <Hero />
     <Event />
     <NewsItems />
     <NewsLetter />

      <Footer />
    </>
  );
}