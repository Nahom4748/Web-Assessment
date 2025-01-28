import React from "react";
import RestaurantCard, { RestaurantCardProps } from "./RestaurantCard";

const FeaturedRestaurants: React.FC = () => {
  const restaurants: RestaurantCardProps[] = [
    {
      imageUrl: "/assets/images/10002.png",
      logoUrl: "/assets/images/10013.png",
      name: "Bow Lasagna",
      rating: 4.6,
      price: "$2.99",
      status: "Open Now",
    },
    {
      imageUrl: "/assets/images/10003.png",
      logoUrl: "/assets/images/10009.png",
      name: "Mixed Avocado Smoothy",
      rating: 4.6,
      price: "$2.99",
      status: "Closed",
    },
    {
      imageUrl: "/assets/images/10004.png",
      logoUrl: "/assets/images/10015.png",
      name: "PanCake",
      rating: 4.8,
      price: "$2.99",
      status: "Closed",
    },
    {
      imageUrl: "/assets/images/10017.png",
      logoUrl: "/assets/images/10008.png",
      name: "CupCake",
      rating: 5.6,
      price: "$2.99",
      status: "Open Now",
    },
    {
      imageUrl: "/assets/images/10016.png",
      logoUrl: "/assets/images/10006.png",
      name: "Creamy Stake",
      rating: 5.4,
      price: "$2.99",
      status: "Closed",
    },
    {
      imageUrl: "/assets/images/10007.png",
      logoUrl: "/assets/images/10005.png",
      name: "Stake Omlet",
      rating: 5.2,
      price: "$2.99",
      status: "Open Now",
    },
    // Add more restaurant data here
  ];

  return (
    <div className="flex flex-col gap-[88px] justify-center items-center bg-white self-stretch shrink-0 flex-nowrap relative">
      <span className="flex w-[407px] h-[48px] mt-16 justify-center items-start shrink-0 basis-auto font-['Source_Sans_Pro'] text-[43px] font-bold leading-[48px] text-[#212121] relative text-center whitespace-nowrap">
        Featured Restaurants
      </span>
      <div className="flex w-[1476px] flex-col gap-[64px] items-start shrink-0 flex-nowrap relative">
        <div className="grid grid-cols-4 gap-[64px]">
          {restaurants.map((restaurant, index) => (
            <RestaurantCard key={index} {...restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedRestaurants;
