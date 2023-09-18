import React from "react";
import Image from "next/image";

const Cash = () => {
  return (
    <div
      className="mx-auto top-0  min-w-l min-h-[600px] 
    max-w-[1366px] max-h-[750px] relative bg-black "
    >
      <div className="absolute w-[353px] h-[147px] top-[226px] left-[211px] ">
        <p className="text-[40px] font-[800px] font-['Agrandir'] text-[#00d54b] leading-10">
          Cash Card
          <br />& Boost
        </p>
        <p className="font-[Mulish] text-[16px] leading-4 tracking-[0.3px] text-white">
          The Cash Card is a free, customizable debit card that lets you pay
          online and in stores. It’s the only way to get Boosts—instant
          discounts that work at places where you want to spend.{" "}
        </p>
      </div>
      <div className=" top-[149px] absolute left-[558px] w-[250px] h-[508.93px]">
        <Image src="/boost-phone.png" alt="" width={200} height={400} />
      </div>
    </div>
  );
};

export default Cash;
