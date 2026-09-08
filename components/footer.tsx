"use client";

import Image from "next/image";

export default function BottomNav() {
  return (
    
    <div className="fixed bottom-[25px] left-1/2 z-50 h-[65px] w-[355px] -translate-x-1/2">

      {/* Your PNG rounded rectangle */}
      <Image
        src="/roundedrectangle.png"
        alt="Navigation background"
        fill
        className="object-contain"
        priority
      />

      {/* Icons on top of PNG */}
      <div className="absolute inset-0 flex items-center justify-around px-[24px]">

        {/* Playgame */}
        <button
          onClick={() => console.log("Playgame")}
          className="flex h-full w-[45px] flex-col items-center justify-center"
        >
          <Image
            src="/gamepaneicon.png"
            alt="Playgame"
            width={22}
            height={22}
          />
          <span className="mt-[3px] text-[8px] text-[#aaa]">
            Playgame
          </span>
        </button>

        {/* Mine */}
        <button
          onClick={() => console.log("Mine")}
          className="flex h-full w-[45px] flex-col items-center justify-center"
        >
          <Image
            src="/toolicon.png"
            alt="Mine"
            width={22}
            height={22}
          />
          <span className="mt-[3px] text-[8px] text-[#aaa]">
            Mine
          </span>
        </button>

        {/* Home */}
        <button
          onClick={() => console.log("Home")}
          className="flex h-full w-[45px] flex-col items-center justify-center"
        >
          <Image
            src="/homeicon.png"
            alt="Home"
            width={22}
            height={22}
          />
          <span className="mt-[3px] text-[8px] font-semibold text-[#ff9900]">
            Home
          </span>
        </button>

        {/* Earn */}
        <button
          onClick={() => console.log("Earn")}
          className="flex h-full w-[45px] flex-col items-center justify-center"
        >
          <Image
            src="/moneyicon.png"
            alt="Earn"
            width={22}
            height={22}
          />
          <span className="mt-[3px] text-[8px] text-[#aaa]">
            Earn
          </span>
        </button>

        {/* Airdrop */}
        <button
          onClick={() => console.log("Airdrop")}
          className="flex h-full w-[45px] flex-col items-center justify-center"
        >
          <Image
            src="/airdropicon.png"
            alt="Airdrop"
            width={22}
            height={22}
          />
          <span className="mt-[3px] text-[8px] text-[#aaa]">
            Airdrop
          </span>
        </button>

      </div>
    </div>
  );
}