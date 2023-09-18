import React from "react";
import Image from "next/image";

const Payments = () => {
  return (
    <div
      className="mx-auto top-0  min-w-l min-h-[600px] 
    max-w-[1366px] max-h-[750px] relative bg-[#f8f6f6]"
    >
      <div className="absolute w-[353px] h-[157px] top-[228px] left-[236px]">
        <p className="text-[40px] font-[800px] font-[Agrandir] text-[#00d54b] leading-10">
          Payments
        </p>
        <p className="font-[Mulish] text-[16px] leading-4 tracking-[0.3px] ">
          Send and receive money with anyone, donate to an important cause, or
          tip professionals. Just enter a $cashtag, phone number, or scan their
          QR code to pay.
        </p>
      </div>
      <div className="pl-20 top-[116px] absolute left-[306px] w-[750px] h-[431.54px]">
        <Image src="/payments-phone 1.png" alt="" width={500} height={900} />
      </div>
    </div>
  );
};

export default Payments;
