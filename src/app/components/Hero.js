import React from "react";
import Image from "next/image";
import HeroFooter from "./HeroFooter";

const Hero = () => {
  return (
    <div
      className="mx-auto mt-20  min-w-l min-h-[600px] 
    max-w-[1366px] max-h-[721px] relative bg-black text-center items-center"
    >
      {" "}
      <nav className="pt-10 justify-around items-center flex">
        <div className="text-yellow-500">
          <Image
            src="/Vector.png"
            alt=""
            width={30}
            height={44}
            className="border border-[#00d54b]"
          />
        </div>
        <div
          className="text-xs font-bold text-white 
        uppercase flex space-x-4"
        >
          <div>signin</div>
          <div>legal</div>
          <div>licenses</div>
          <div>security</div>
          <div>careers</div>
          <div>press</div>
          <div>support</div>
          <div>status</div>
          <div>codeblog</div>
        </div>
        <div className="text-yellow-500">
          <Image
            src="/eye button.png"
            alt=""
            width={64}
            height={36}
            className=""
          />
        </div>
      </nav>
      <div
        className=" m-10 md:ml-[324px] items-center mx-auto text-white uppercase 
        font-bold"
      >
        <Image
          src="/CASH.png"
          alt=""
          width={711}
          height={302.88}
          className="pb-2 text-center items-center"
        />
        <Image src="/APP.png" alt="" width={711} height={302.88} />
      </div>
      {/*footer*/}
      <HeroFooter />
    </div>
  );
};

export default Hero;
