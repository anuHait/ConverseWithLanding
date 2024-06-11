import Image from "next/image";
import Landing from "@/components/Landing";
import Services from "@/components/Services";
import Genre from "@/components/Genres";
import GetOnBoard from "@/components/GetOnBoard";
import CreatePluggin from "@/components/CreatePluggin";
import Faq from "@/components/Faq";
export default function Home() {
  return (
    <>
    <Landing />
    <Services />
    <Genre/>
   
    <CreatePluggin />
    <GetOnBoard />
    <Faq />
    </>
  );
}
