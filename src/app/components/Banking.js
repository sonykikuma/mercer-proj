import React from "react";
import Image from "next/image";

const Banking = () => {
  return (
    <div
      className="mx-auto top-0  min-w-l min-h-[600px] 
    max-w-[1366px] max-h-[750px] relative bg-[#00d54b] "
    >
      <div className="absolute w-[353px] h-[147px] top-[228px] left-[236px] mx-auto">
        <p className="text-[40px] font-[800px] font-['Agrandir'] text-white leading-10">
          Banking
        </p>
        <p className="font-[Mulish] text-[16px] leading-4 tracking-[0.3px] ">
          Send and receive money with anyone, donate to an important cause, or
          tip professionals. Just enter a $cashtag, phone number, or scan their
          QR code to pay.
        </p>
      </div>
      <div className="mx-auto pl-20 top-[171px] absolute left-[508px] w-[350px] h-[403px]">
        <Image src="/banking-phone.png" alt="" width={500} height={900} />
      </div>
    </div>
  );
};

export default Banking;
