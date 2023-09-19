import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div
        className="mx-auto mt-20  min-w-l min-h-[600px] 
    max-w-[1000px] max-h-[721px] text-[#810ea9] relative bg-slate-100 text-center items-center rounded-[15px]"
      >
        About me
        <div className="pt-10 justify-around items-center flex">
          <div className="py-20">
            <Image src="/me.png" alt="" width={300} height={300} />{" "}
          </div>
          <div className=" uppercase text-[#810ea9]">
            <p className="text-[24px] font-bold tracking-[0.5px] leading-7">
              ogoluwa
            </p>
            <p className="text-[24px] font-bold tracking-[0.5px] leading-7">
              ojewale
            </p>
            <p className="mb-2 text-[24px] font-medium tracking-[0.5px] leading-7">
              ui/ux designer
            </p>
            <hr className="bg-[#d560fe]" />
            <Image
              src="/Follow us.png"
              alt=""
              width={182}
              height={73}
              className="mb-2"
            />{" "}
            <hr />
            <p className="text-[24px] font-medium uppercase text-[#810ea9] tracking-[0.5px] leading-7">
              ogopedia.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
