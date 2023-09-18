import React from "react";
import Image from "next/image";
import InvestFooter from "./InvestFooter";

const Investing = () => {
  return (
    <div
      className="mx-auto top-0  min-w-l min-h-[700px] 
    max-w-[1366px] max-h-[800px] relative  bg-gradient-to-b from-[#00d54b] to-white "
    >
      <h1 className="pt-[131px] text-center items-center text-white uppercase text-[40px] font-[800px] font-['Agrandir'] leading-10">
        {" "}
        investing
      </h1>
      <div className="flex ">
        <div>
          <div className="absolute w-[352px] h-[136px] top-[288px] left-[95px]">
            <p className="text-[40px] font-[800px] font-[Agrandir] text-black leading-10">
              Stocks
            </p>
            <p className="font-[Mulish] text-[16px] leading-4 tracking-[0.3px] ">
              Cash App is the fastest way to convert dollars to bitcoin. From
              your home screen, six taps are all it takes to stack sats, buy an
              entire bitcoin, or just see what it’s all about.{" "}
            </p>
          </div>
          <div className=" top-[252px] absolute left-[484px] w-[160px] h-[344px]">
            <Image
              src="/investing-stocks.png"
              alt=""
              width={500}
              height={900}
            />
          </div>
        </div>

        <div>
          {" "}
          <div className="absolute w-[336px] h-[136px] top-[288px] left-[900px]">
            <p className="text-[40px] font-[800px] font-[Agrandir] text-black leading-10">
              Bitcoin
            </p>
            <p className="font-[Mulish] text-[16px] leading-4 tracking-[0.3px] ">
              Whether you’re an expert or just getting started, Cash App is the
              fastest and most accessible way to invest in stocks. Start now
              with as little as $1.{" "}
            </p>
          </div>
          <div className="top-[254px] absolute left-[722px] w-[160px] h-[346px]">
            <Image
              src="/investing-stocks.png"
              alt=""
              width={500}
              height={900}
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 text-black flex left-10 justify-between">
        <InvestFooter />{" "}
      </div>
    </div>
  );
};

export default Investing;
