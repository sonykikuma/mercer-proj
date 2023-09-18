import React from "react";
import Image from "next/image";

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
      <div className="  bottom-0 px-[60px] text-white flex justify-between">
        <div className="flex uppercase text-[12px] font-bold space-x-5">
          <div className="items-center border rounded-md border-white bg-transparent w-[150px] h-[50px] inline-flex  text-center gap-5 py-1 px-2  ">
            <div className=" ">
              <Image src="/vector1.png" alt="" width={19.22} height={22.82} />
            </div>
            <div className=" "> app store</div>
          </div>
          <div className="items-center border rounded-md border-white bg-transparent w-[150px] h-[50px] py-1 px-2 inline-flex gap-5">
            <span>
              <Image src="/vector-2.png" alt="" width={19.45} height={21.22} />
            </span>{" "}
            <span className="">google play</span>
          </div>{" "}
        </div>

        <div className="flex space-x-5 ">
          <div className="w-[363px] h-[50px] border border-white bg-transparent py-1 font-[Mulish] text-[10px] text-white">
            policy text Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div>
            {" "}
            <Image src="/vector-0.png" alt="" width={24} height={24} />
          </div>
          <div>
            {" "}
            <Image src="/vector.svg" alt="" width={21} height={17} />
          </div>
          <div>
            {" "}
            <Image src="/vector-5.png" alt="" width={21} height={21} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

{
  /* <div className="absolute left-4 bottom-0 text-white px-[60px] pb-[20px] flex justify-between">
</div> */
}

{
  /* <footer className="absolute left-4 bottom-0 text-white px-[60px] pb-[20px] flex justify-between">
<div className="flex  space-x-5">
  <div className="border rounded-md border-white bg-transparent w-[150px] justify-between text-center py-1 px-2  items-center">
    <div className=" items-center">
      <Image src="/vector1.png" alt="" width={19.22} height={22.82} />
    </div>
    <div className="text-center"> apple</div>
  </div>
  <div className="border rounded-md border-white bg-transparent w-[130px]  py-1 px-2">
    <span>
      <Image src="/vector-2.png" alt="" width={19.45} height={21.22} />
    </span>{" "}
    <span> play</span>
  </div>{" "}
</div>

<div className="flex space-x-3 ">
  <div>chat icon</div>
  <div>twitter</div>
  <div>insta</div>
</div>
</footer> */
}
