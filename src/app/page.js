import Image from "next/image";
import Hero from "./components/Hero";
import Payments from "./components/Payments";
import Banking from "./components/Banking";
import Cash from "./components/Cash";
import Investing from "./components/Investing";

export default function Home() {
  return (
    <>
      <div className="w-full">
        <Hero />
        <Payments />
        <Banking />
        <Cash />
        <Investing />
      </div>
    </>
  );
}
