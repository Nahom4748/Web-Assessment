// src/components/RestaurantCard.tsx
import Image from "next/image";
import React from "react";

interface RestaurantCardProps {
  imageUrl: string;
  logoUrl: string;
  name: string;
  rating: number;
  price: string;
  status: "Open Now" | "Closed";
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({
  imageUrl,
  logoUrl,
  name,
  rating,
  price,
  status,
}) => {
  return (
    <div className="flex w-[357px] flex-col gap-[24px] items-start shrink-0 flex-nowrap rounded-[16px] relative overflow-hidden">
      <div className="w-[357px] h-[301px] shrink-0 bg-[#fff] rounded-[16px] relative overflow-hidden">
        <button className="flex w-[114px] gap-[8px] items-start flex-nowrap border-none relative pointer mt-[24px] mr-0 mb-0 ml-[24px]">
          <div className="flex z-50 w-[114px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] items-center shrink-0 flex-nowrap bg-[#f17228] rounded-[8px] absolute top-0 left-0 ">
            <span className="h-[22px] shrink-0 basis-auto font-['Font_Awesome_5_Free'] text-[18px] font-black leading-[22px] text-[#fff] relative text-left whitespace-nowrap">
              <Image
                src="https://img.icons8.com/?size=100&id=12028&format=png&color=000000"
                alt=""
                width={100}
                height={100}
                className="w-[22px] h-[22px] shrink-0 relative"
              />
            </span>
            <span className="h-[26px] shrink-0 basis-auto     text-[22px] font-bold leading-[26px] text-[#fff] relative text-left whitespace-nowrap">
              {price}
            </span>
          </div>
        </button>
        <div
          className="w-[357px] h-[301px] bg-cover bg-no-repeat absolute top-0 left-0"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </div>
      <div className="flex w-[216px] flex-col gap-[32px] items-start shrink-0 flex-nowrap relative">
        <div className="flex w-[216px] gap-[24px] items-center shrink-0 flex-nowrap relative">
          <div className="w-[64px] h-[64px] shrink-0 relative">
            <div
              className="w-full h-full bg-cover bg-no-repeat absolute top-0 left-0"
              style={{ backgroundImage: `url(${logoUrl})` }}
            />
          </div>
          <div className="flex w-[128px] flex-col gap-[4px] items-start shrink-0 flex-nowrap relative">
            <span className="h-[26px] shrink-0 basis-auto     text-[22px] font-bold leading-[26px] text-[#424242] relative text-left whitespace-nowrap">
              {name}
            </span>
            <div className="flex w-[61px] gap-[8px] items-start shrink-0 flex-nowrap relative">
              <span className="h-[23px] shrink-0 basis-auto font-['Font_Awesome_5_Free'] text-[22px] font-black leading-[23px] text-[#ffb20d] relative text-left whitespace-nowrap">
                <Image
                  src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000"
                  alt=""
                  width={100}
                  height={100}
                  className="w-[23px] h-[23px] shrink-0 relative"
                />
              </span>
              <span className="h-[26px] shrink-0 basis-auto     text-[22px] font-normal leading-[26px] text-[#ffb20d] relative text-left whitespace-nowrap">
                {rating}
              </span>
            </div>
          </div>
        </div>
        <button
          className={`flex w-fit pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] items-start shrink-0 flex-nowrap rounded-[16px] border-none relative pointer ${
            status === "Open Now"
              ? "bg-[rgba(121,184,60,0.2)]"
              : "bg-[rgba(241,114,40,0.2)]"
          }`}
        >
          <span
            className={`h-[26px] w-fit shrink-0 basis-auto     text-[22px] font-bold leading-[26px] relative text-left whitespace-nowrap ${
              status === "Open Now" ? "text-[#79b83c]" : "text-[#f17228]"
            }`}
          >
            {status}
          </span>
        </button>
      </div>
    </div>
  );
};

export default RestaurantCard;
