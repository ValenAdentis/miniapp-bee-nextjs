"use client";

import Image from "next/image";
import { useState } from "react";

const items = [
  {
    name: "Playgame",
    icon: "/gamepaneicon.png",
    icon1: "/ygamepane.png",
  },
  {
    name: "Mine",
    icon: "/toolicon.png",
    icon1: "/ytoolicon.png"
  },
  {
    name: "Home",
    icon: "/whitehomeicon.png",
    icon1: "/homeicon.png"
  },
  {
    name: "Earn",
    icon: "/moneyicon.png",
    icon1: "/ymoneyicon.png",
  },
  {
    name: "Airdrop",
    icon: "/airdropicon.png",
    icon1: "/yairdropicon.png",
  },
];

export default function BottomNav() {
  const [active, setActive] = useState("Home");

  return (
    <div className="fixed bottom-[20px] left-1/2 z-50 h-[65px] w-[355px] -translate-x-1/2">
      
      {/* Your PNG background */}
      <Image
        src="/roundedrectangle.png"
        alt=""
        fill
        className="object-contain"
        priority
      />

      {/* Buttons */}
      <div className="absolute top-[15px] inset-0 flex items-center justify-around px-[24px]">
        {items.map((item) => {
          const isActive = active === item.name;

          return (
            <button
              key={item.name}
              type="button"
              onClick={() => setActive(item.name)}
              className="relative flex h-full w-[45px] flex-col items-center justify-center"
            >
              {/* Icon */}
              <Image
                src={`${isActive?item.icon1:item.icon}`}
                alt={item.name}
                width={22}
                height={22}
                className={`
                  object-contain
                  transition-all duration-200
                  ${active ? "-translate-y-2 scale-125 bg-red" : "translate-y-0 scale-100"}
                `}
              />

              {/* Text */}
              <span
                className={`
                  mt-[2px] whitespace-nowrap text-[8px]
                  transition-all duration-200
                  ${
                    isActive
                      ? "font-semibold text-[#ff9900]"
                      : "text-[#aaa]"
                  }
                `}
              >
                {item.name}
              </span>

              {/* Orange indicator */}
              {isActive && (
                <div className="" >
                    <img
                        src="/angleicon.png"
                        alt="Pointer"
                        className="h-[14px] w-[14px] object-contain"
                    />
                </div>
                
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}