import Image from "next/image";
import Landing from "@/components/Landing";
import Services from "@/components/Services";
import Genre from "@/components/Genres";
import GetOnBoard from "@/components/GetOnBoard";
export default function Home() {
  return (
    <>
    <Landing />
    <Services />
    <Genre/>
    <GetOnBoard />
    </>
  );
}
