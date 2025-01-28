// src/components/Hero.tsx
import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="h-[628px] self-stretch shrink-0 bg-[#ffb20d] relative overflow-hidden z-[9]">
      <div className="flex w-[856px] h-[355.442px] flex-col gap-[32px] items-start flex-nowrap absolute top-[132px] left-[220px] z-[11]">
        <div className="flex w-[666px] flex-col gap-[15px] justify-center items-start shrink-0 flex-nowrap rounded-[16px] relative z-[12]">
          <span className="h-[88px] shrink-0 basis-auto    text-[88px] font-bold leading-[88px] text-[#fff] relative text-left whitespace-nowrap z-[13]">
            Are you starving?
          </span>
          <span className="h-[26px] shrink-0 basis-auto    text-[22px] font-normal leading-[26px] text-[#fff] relative text-left whitespace-nowrap z-[14]">
            Within a few clicks, find meals that are accessible near you
          </span>
        </div>
        <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap rounded-[16px] relative overflow-hidden z-[15]">
          <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] gap-[8px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] relative z-[16]">
            <button className="flex w-[148px] pt-[10px] pr-[24px] pb-[10px] pl-[24px] gap-[10px] items-start shrink-0 flex-nowrap bg-[rgba(241,114,40,0.1)] rounded-[8px] border-none relative z-[17] pointer">
              <span className="h-[18px] shrink-0 basis-auto font-['Font_Awesome_5_Free'] text-[18px] font-black leading-[18px] text-[#f17228] relative text-left whitespace-nowrap z-[18]">
                <Image
                  src="https://img.icons8.com/?size=100&id=62284&format=png&color=f17228"
                  alt=""
                  width={100}
                  height={100}
                  className="w-[18px] h-[18px] shrink-0 relative"
                />
              </span>
              <span className="h-[18px] shrink-0 basis-auto    text-[18px] font-bold leading-[18px] text-[#f17228] relative text-left whitespace-nowrap z-[19]">
                Delivery
              </span>
            </button>
            <div className="flex w-[129px] pt-[10px] pr-[24px] pb-[10px] pl-[24px] gap-[10px] items-start shrink-0 flex-nowrap relative z-20">
              <span className="h-[18px] shrink-0 basis-auto font-['Font_Awesome_5_Free'] text-[18px] font-black leading-[18px] text-[#757575] relative text-left whitespace-nowrap z-[21]">
                <Image
                  src="https://img.icons8.com/?size=100&id=8386&format=png&color=757575"
                  alt=""
                  width={100}
                  height={100}
                  className="w-[18px] h-[18px] shrink-0 relative"
                />
              </span>
              <span className="h-[18px] shrink-0 basis-auto    text-[18px] font-bold leading-[18px] text-[#757575] relative text-left whitespace-nowrap z-[22]">
                Pickup
              </span>
            </div>
          </div>
          <div className="h-[1.442px] self-stretch shrink-0 bg-[url('/assets/images/83d0c975-3317-48ab-a601-1f94ea47feda.png')] bg-cover bg-no-repeat relative z-[23]" />
          <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] relative z-[24]">
            <div className="flex gap-[16px] items-center self-stretch shrink-0 flex-nowrap relative z-[25]">
              <div className="flex items-center gap-[12px] bg-[#f5f5f5] rounded-[8px] relative z-[26] px-[16px] py-[8px]">
                <Image
                  src="https://img.icons8.com/?size=100&id=132&format=png&color=f17228"
                  alt="Search Icon"
                  width={24}
                  height={24}
                  className="w-[24px] h-[24px] shrink-0"
                />
                <input
                  className="flex-grow h-[40px] w-[493px] bg-transparent border-none outline-none text-[#9e9e9e] text-[18px] placeholder:text-[#9e9e9e] font-['Open_Sans']"
                  placeholder="What do you like to eat today?"
                />
              </div>

              <button className="flex w-[199px] pt-[16px] pr-[32px] pb-[16px] pl-[32px] gap-[10px] justify-center items-center shrink-0 flex-nowrap rounded-[8px] bg-[#f17228] border-none relative z-30 text-white hover:bg-[#e3621d] transition-colors duration-300">
                <span className="flex w-[14px] h-[14px] justify-center items-center shrink-0">
                  <Image
                    src="https://img.icons8.com/?size=100&id=132&format=png&color=ffffff"
                    alt="Find Food Icon"
                    width={14}
                    height={14}
                    className="w-[14px] h-[14px] shrink-0"
                  />
                </span>
                <span className="flex w-auto h-[18px] justify-center items-center shrink-0    text-[18px] font-bold leading-[18px] text-[#fff]">
                  Find Food
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/assets/images/10001.png"
          width={604}
          height={505}
          alt=""
          className="absolute top-[182px] left-[1098px] z-10 w-[504px] h-[504px] drop-shadow-2xl "
        />
      </div>
      <div className="w-[604px] h-[505px] bg-[url('/assets/images/64dc4af5-2f37-4910-b96c-db63458e1fbc.png')] bg-cover bg-no-repeat absolute top-[182px] left-[1098px] z-10" />
    </div>
  );
};

export default Hero;
