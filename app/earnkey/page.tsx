"use client";

import { useState } from "react";

const games = [
  {
    name: "Game Name",
    image: "/earnkey/bee.png",
  },
  {
    name: "Game Name",
    image: "/earnkey/ninja.png",
  },
  {
    name: "Game Name",
    image: "/earnkey/explorer.png",
  },
  {
    name: "Game Name",
    image: "/earnkey/skater.png",
  },
  {
    name: "Game Name",
    image: "/earnkey/boxer.png",
  },
  {
    name: "Game Name",
    image: "/earnkey/fighter.png",
  },
];

const navItems = [
  {
    name: "Playgame",
    icon: "🎮",
  },
  {
    name: "Mine",
    icon: "⛏",
  },
  {
    name: "Home",
    icon: "⌂",
  },
  {
    name: "Earn",
    icon: "$",
  },
  {
    name: "Airdrop",
    icon: "🎁",
  },
];

import BeeHeader from "@/components/beeheader";
import Footer from "@/components/footer";
import SearchButton from "@/components/searchbutton";

export default function Page() {
  const [activeNav, setActiveNav] = useState("Playgame");

  return (
    <main className="flex min-h-screen justify-center bg-white items-center">
      {/* 393 x 649 Application */}
      <div className="relative mx-auto h-[649px] rounded-[22px] w-[393px] overflow-hidden bg-black text-white">
        {/* =====================================
            HEADER
        ====================================== */}

        <BeeHeader />

        {/* =====================================
            EARN BANNER
        ====================================== */}
        <section className="left-1/2 flex justify-center items-center">
          <SearchButton />
        </section>


        {/* =====================================
            GAME GRID
        ====================================== */}
        <section className="absolute left-[22px] top-[127px] grid w-[349px] grid-cols-3 gap-x-[13px] gap-y-[27px]">
          {games.map((game, index) => (
            <button
              key={index}
              type="button"
              className="
                h-[137px]
                w-[106px]
                rounded-[13px]
                border-b-1
                border-[#704b08]
                bg-[#181818]
                p-[7px]
                shadow-[0_0_12px_rgba(255,174,33,0.16)]
                transition-transform
                active:scale-95
              "
            >
              {/* Image */}
              <div className="h-[85px] w-[92px] overflow-hidden rounded-[10px] bg-[#252525]">
                <img
                  src={game.image}
                  alt={game.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Game name */}
              <div className="mt-[3px] text-center text-[11px] leading-[13px] text-[#eeeeee]">
                {game.name}
              </div>

              {/* Key count */}
              <div className="mt-[2px] flex items-center justify-center gap-[2px] text-[7px] leading-[8px] text-[#8d8d8d]">
                <span className="text-[8px] text-[#ffae21]">🔑</span>

                <span>0/4 received</span>
              </div>
            </button>
          ))}
        </section>

        {/* =====================================
            BOTTOM NAVIGATION
        ====================================== */}
        <nav className="absolute bottom-[20px] left-1/2">
          <Footer />
        </nav>
      </div>
    </main>
  );
}