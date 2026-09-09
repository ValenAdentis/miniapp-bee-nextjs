"use client";
import PageTransition from "@/components/PageTransition";

type AirdropPageProps = {
  onClose?: () => void;
  onNavigate?: (page: string) => void;
  onAirdrop?: (type: string) => void;
};

const airdrops = [
  {
    id: "passive-income",
    title: "Passive Income",
    image: "/airdrop/passiveincomeicon.png",
  },
  {
    id: "earn-task",
    title: "Earn Task",
    image: "/airdrop/earntaskicon.png",
  },
  {
    id: "friends",
    title: "Friends",
    image: "/airdrop/friendsicon.png",
  },
  {
    id: "achievement",
    title: "Achievement",
    image: "/airdrop/achievementicon.png",
  },
  {
    id: "telegram",
    title: "Telegram Subscription",
    image: "/airdrop/jointelegramicon.png",
  },
  {
    id: "keys",
    title: "Keys",
    image: "/airdrop/keyicon.png",
  },
];

const navigation = [
  {
    id: "playgame",
    label: "Playgame",
    image: "/airdrop/playgame.png",
  },
  {
    id: "mine",
    label: "Mine",
    image: "/airdrop/mine.png",
  },
  {
    id: "home",
    label: "Home",
    image: "/airdrop/home.png",
  },
  {
    id: "earn",
    label: "Earn",
    image: "/airdrop/earn.png",
  },
  {
    id: "airdrop",
    label: "Airdrop",
    image: "/airdrop/airdrop.png",
    active: true,
  },
];

import BeeHeader from "@/components/beeheader";
import Footer from "@/components/footer";

export default function AirdropPage({
  onClose,
  onNavigate,
  onAirdrop,
}: AirdropPageProps) {
  return (
    <PageTransition>
    <div className="flex min-h-screen w-full items-center justify-center bg-white ">

      {/* ================================================= */}
      {/* 393 x 694 APP CANVAS */}
      {/* ================================================= */}

      <div className="relative h-[664px] w-[393px] shrink-0 overflow-hidden bg-black text-white">

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <BeeHeader />

        {/* ================================================= */}
        {/* HERO */}
        {/* ================================================= */}

        <section className="relative h-[91px] w-full">

          {/* Left bee */}
          <img
            src="/airdrop/flyingbeeicon.png"
            alt=""
            className="absolute left-[17px] rotate-45 top-[9px] h-[40px] w-[40px] object-contain"
          />

          {/* Right bee */}
          <img
            src="/airdrop/returnbeeicon.png"
            alt=""
            className="absolute right-[17px] top-[9px] h-[40px] w-[40px] object-contain"
          />

          {/* Title */}
          <h1 className="absolute left-0 top-[20px] w-full text-center text-[30px] font-extrabold leading-[36px] tracking-[-1px] text-[#ffad00]">
            Get Airdrop
          </h1>

          {/* Subtitle */}
          <p className="absolute left-0 top-[60px] w-full text-center text-[11px] leading-[13px] text-[#d0d0d0]">
            Make our tasks to get more coins
          </p>

        </section>


        {/* ================================================= */}
        {/* BALANCE CARD */}
        {/* ================================================= */}

        <section className="absolute left-[23px] top-[152px] w-[347px]">

          <div className="flex h-[48px] w-full items-center rounded-[7px] border border-[#373737] bg-[#171717] px-[11px]">

            {/* Binance icon */}
            <div className="flex h-[27px] w-[27px] shrink-0 items-center justify-center">
              <img
                src="/airdrop/binanceicon.png"
                alt=""
                className="h-[27px] w-[27px] object-contain"
              />
            </div>

            {/* Binance */}
            <button
              type="button"
              className="ml-[8px] flex items-center gap-[4px] text-[12px] text-[#e7e7e7]"
            >
              <span>Binance</span>
              <span className="text-[20px] leading-none text-[#bdbdbd]">
                ›
              </span>
            </button>

            {/* Balance */}
            <div className="ml-auto flex items-center gap-[5px]">

              <img
                src="/airdrop/flyingbeeicon.png"
                alt=""
                className="h-[24px] w-[24px] object-contain"
              />

              <span className="text-[21px] font-bold leading-none text-[#ff9f00]">
                109 343
              </span>

            </div>

          </div>

        </section>


        {/* ================================================= */}
        {/* AIRDROP TASKS */}
        {/* ================================================= */}

        <section className="absolute left-[23px] top-[216px] w-[347px]">

          {airdrops.map((item) => (
            <div
              key={item.id}
              className="mb-[5px] flex h-[43px] w-full items-center rounded-[9px] border border-[#393939] bg-black px-[8px]"
            >

              {/* Task icon */}
              <div className="flex h-[27px] w-[27px] shrink-0 items-center justify-center">
                <img
                  src={item.image}
                  alt=""
                  className="h-[27px] w-[27px] object-contain"
                />
              </div>

              {/* Task title */}
              <span className="ml-[8px] min-w-0 flex-1 truncate text-[11px] text-[#dedede]">
                {item.title}
              </span>

              {/* Airdrop button */}
              <button
                type="button"
                onClick={() => onAirdrop?.(item.id)}
                className="flex h-[32px] transition active:scale-95 w-[72px] shrink-0 items-center justify-center rounded-[9px] bg-gradient-to-b from-[#ffad17] to-[#ff8700] text-[9px] font-medium text-white"
              >
                <span>Airdrop</span>
                <span className="ml-[2px] text-[16px] leading-none">
                  ›
                </span>
              </button>

            </div>
          ))}

        </section>


        {/* ================================================= */}
        {/* BOTTOM NAVIGATION */}
        {/* ================================================= */}

        <nav className="absolute bottom-[20px] left-1/2">
          <Footer name="Airdrop" />
        </nav>

      </div>
    </div>
    </PageTransition>
   
  );
}