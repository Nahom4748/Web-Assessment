// src/components/Header.tsx
import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex w-[1920px] pt-[16px] pr-[220px] pb-[16px] pl-[220px] gap-[1229px] items-center shrink-0 flex-nowrap bg-[#fff] relative shadow-[0_20px_40px_0_rgba(255,173,0,0.29)] z-[2]">
      <div className="flex w-[197px] gap-[11.5px] items-center shrink-0 flex-nowrap relative z-[3]">
        <div className="w-[28px] h-[29.977px] shrink-0 bg-[url('/assets/images/b59f2ff0-5691-42f0-81c6-73c0055b0d21.png')] bg-cover bg-no-repeat relative z-[4]" />
        <div className="flex w-[154px] items-start shrink-0 flex-nowrap relative z-[5]">
          <div className="w-[154px] shrink-0 text-[31.11019515991211px] font-bold leading-[37px] tracking-[-0.78px] relative text-left whitespace-nowrap z-[6]">
            <span className="text-[#f17228]">Food</span>
            <span className="text-[#ffb20d]">Wagen</span>
          </div>
        </div>
      </div>
      <button className="flex bg-[#ffb20d] w-[150px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] gap-[10px] justify-center items-center shrink-0 flex-nowrap rounded-[14px] border-none relative shadow-[0_20px_40px_0_rgba(255,173,0,0.29)] z-[7] pointer">
        <span className="flex w-[71px] h-[18px] justify-center items-start shrink-0 basis-auto   text-[18px] font-bold leading-[18px] text-[#fff] relative text-center whitespace-nowrap z-[8]">
          Add food
        </span>
      </button>
    </div>
  );
};

export default Header;
