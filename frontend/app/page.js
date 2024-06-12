import Image from "next/image";
import Landing from "@/components/Landing";
import Services from "@/components/Services";
import Genre from "@/components/Genres";
import GetOnBoard from "@/components/GetOnBoard";
import CreatePluggin from "@/components/CreatePluggin";
import Faq from "@/components/Faq";
import Steps from "@/components/Steps";
import AppFooter from "@/components/AppFooter";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <>
    <Navbar />
    <Landing />
    <Services />
    <Genre/>
   
    <CreatePluggin />
    <GetOnBoard />
    <Steps />
    <Faq />
    <AppFooter />
    <Footer />
    </>
  );
}
