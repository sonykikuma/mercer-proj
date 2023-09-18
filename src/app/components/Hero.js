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
            <svg
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.05646 17.4431C14.9241 17.4431 19.2262 10.9252 19.2262 5.27335C19.2262 5.08822 19.2225 4.90392 19.2142 4.72046C20.0493 4.1167 20.7753 3.36326 21.3477 2.50557C20.5814 2.84623 19.7566 3.07556 18.8914 3.17896C19.7746 2.64942 20.4525 1.81175 20.7723 0.813136C19.9459 1.30306 19.0307 1.65915 18.0563 1.85136C17.2757 1.01995 16.1645 0.5 14.9341 0.5C12.572 0.5 10.6565 2.41551 10.6565 4.77675C10.6565 5.1124 10.694 5.43888 10.7674 5.75201C7.21242 5.57314 4.06021 3.87111 1.95081 1.28305C1.58347 1.91516 1.37166 2.64942 1.37166 3.43289C1.37166 4.91685 2.12677 6.22693 3.27507 6.9933C2.57333 6.97162 1.91412 6.77898 1.33788 6.45834C1.33725 6.47629 1.33725 6.49378 1.33725 6.51296C1.33725 8.58442 2.81162 10.314 4.76883 10.7059C4.40941 10.8039 4.03122 10.8564 3.64095 10.8564C3.36576 10.8564 3.09765 10.8293 2.83705 10.7793C3.3816 12.4788 4.96063 13.7155 6.83277 13.7501C5.36883 14.8976 3.52462 15.581 1.5203 15.581C1.17547 15.581 0.834818 15.5614 0.5 15.5218C2.39299 16.7351 4.64082 17.4431 7.05668 17.4431"
                fill="white"
              />
            </svg>
          </div>
          <div>
            <Image src="/vector-5.png" alt="" width={21} height={21} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

//<Image src="/vector.svg" alt="" width={21} height={17} />
