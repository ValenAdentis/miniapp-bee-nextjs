"use client";

import PageTransition from "@/components/PageTransition";

type MinePageProps = {
  onClose?: () => void;
  onNavigate?: (page: string) => void;
  onMine?: (id: string) => void;
};

const miners = [
  {
    id: "1",
    image: "/domine/travelbeeicon.png",
  },
  {
    id: "2",
    image: "/domine/travelbeeicon.png",
  },
  {
    id: "3",
    image: "/domine/travelbeeicon.png",
  },
  {
    id: "4",
    image: "/domine/travelbeeicon.png",
  },
  {
    id: "5",
    image: "/domine/travelbeeicon.png",
  },
  {
    id: "6",
    image: "/domine/travelbeeicon.png",
  },
];

const navigation = [
  {
    id: "playgame",
    label: "Playgame",
    image: "/domine/playgame.png",
  },
  {
    id: "mine",
    label: "Mine",
    image: "/domine/mine.png",
    active: true,
  },
  {
    id: "home",
    label: "Home",
    image: "/domine/home.png",
  },
  {
    id: "earn",
    label: "Earn",
    image: "/domine/earn.png",
  },
  {
    id: "airdrop",
    label: "Airdrop",
    image: "/domine/airdrop.png",
  },
];

import BeeHeader from "@/components/beeheader";
import Footer from "@/components/footer";

export default function MinePage({
  onClose,
  onNavigate,
  onMine,
}: MinePageProps) {
  return (
    <PageTransition>
    <div className="flex min-h-screen w-full items-center justify-center bg-white">

      {/* ================================================= */}
      {/* EXACT APP SIZE: 393 x 818 */}
      {/* ================================================= */}

      <div className="relative h-[818px] w-[393px] shrink-0 rounded-[22px] overflow-hidden bg-black text-white ">

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
            src="/domine/flyingbeeicon.png"
            alt=""
            className="absolute left-[17px] rotate-45 top-[9px] h-[40px] w-[40px] object-contain"
          />

          {/* Right bee */}
          <img
            src="/domine/returnbeeicon.png"
            alt=""
            className="absolute right-[13px] top-[9px] h-[40px] w-[40px] object-contain"
          />

          {/* Title */}
          <h1 className="absolute left-0 top-[20px] w-full text-center text-[30px] font-extrabold leading-[36px] tracking-[-1px] text-[#ffad00]">
            DO Mine
          </h1>

          {/* Subtitle */}
          <p className="absolute left-0 top-[60px] w-full text-center text-[11px] leading-[13px] text-[#d0d0d0]">
            Make our tasks to get more coins
          </p>

        </section>


        {/* ================================================= */}
        {/* BINANCE / BALANCE CARD */}
        {/* ================================================= */}

        <section className="absolute left-[23px] top-[152px] w-[347px]">

          <div className="flex h-[48px] w-full items-center rounded-[7px] border border-[#373737] bg-[#171717] px-[11px]">

            {/* Binance */}
            <img
              src="/domine/binanceicon.png"
              alt=""
              className="h-[27px] w-[27px] object-contain"
            />

            <button
              type="button"
              className="ml-[8px] flex items-center text-[12px] text-[#e7e7e7]"
            >
              <span>Binance</span>

              <span className="ml-[4px] text-[20px] leading-none text-[#bdbdbd]">
                ›
              </span>
            </button>

            {/* Balance */}
            <div className="ml-auto flex items-center gap-[5px]">

              <img
                src="/domine/flyingbeeicon.png"
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
        {/* MINING CARDS */}
        {/* ================================================= */}

        <section className="absolute left-[22px] top-[211px] w-[349px]">

          <div className="grid grid-cols-3 gap-[7px]">

            {/* Main bee/miner */}
            <button
              type="button"
              onClick={() => onMine?.("main")}
              className="
                relative
                h-[108px]
                w-[111px]
                overflow-hidden
                rounded-[13px]
                border-b-1
                border-[#FF7B00]
                bg-[#171717]
                shadow-[0_0_9px_rgba(255,174,0,0.18)]
              "
            >
              <img
                src="/domine/winbeeicon.png"
                alt=""
                className="h-full w-full object-contain"
              />
            </button>

            {/* Mining hex cards */}
            {[1, 2].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => onMine?.(`mine-${item}`)}
                className="
                  relative
                  h-[108px]
                  w-[111px]
                  overflow-hidden
                  rounded-[13px]
                  border-b-1
                  border-[#FF7B00]
                  bg-[#171717]
                  shadow-[0_0_9px_rgba(255,174,0,0.18)]
                "
              >
                <img
                  src="/domine/rotatebeeframeicon.png"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </button>
            ))}

          </div>

        </section>


        {/* ================================================= */}
        {/* CATEGORY TABS */}
        {/* ================================================= */}

        <section className="absolute left-[23px] top-[339px] w-[347px]">

          <div className="grid h-[33px] grid-cols-4 gap-[8px]">

            {/* Active */}
            <button
              type="button"
              className="transition active:scale-95 rounded-[7px] bg-gradient-to-b from-[#ffad17] to-[#ff8700] text-[8px] font-medium text-white"
            >
              PR &amp; Team
            </button>

            <button
              type="button"
              className="rounded-[5px] border border-[#333] bg-[#171717] text-[8px] text-[#777]"
            >
              Markets
            </button>

            <button
              type="button"
              className="rounded-[5px] border border-[#333] bg-[#171717] text-[8px] text-[#777]"
            >
              Legal
            </button>

            <button
              type="button"
              className="rounded-[5px] border border-[#333] bg-[#171717] text-[8px] text-[#777]"
            >
              Special
            </button>

          </div>

        </section>


        {/* ================================================= */}
        {/* MINER GRID */}
        {/* ================================================= */}

        <section className="absolute left-[27px] top-[383px] w-[339px]">

          <div className="grid grid-cols-2 gap-[12px]">

            {miners.map((miner) => (
              <button
                key={miner.id}
                type="button"
                onClick={() => onMine?.(miner.id)}
                className="
                  relative
                  h-[104px]
                  w-[166px]
                  overflow-hidden
                  rounded-[11px]
                  bg-[#292827]
                  text-left
                "
              >

                {/* Character */}
                <img
                  src={miner.image}
                  alt=""
                  className="absolute left-[8px] top-[8px] h-[67px] w-[58px] object-contain"
                />

                {/* CEO */}
                <div className="absolute left-[69px] top-[12px]">

                  <div className="text-[12px] leading-[14px] text-white">
                    CEO
                  </div>

                  <div className="mt-[2px] text-[8px] leading-[10px] text-[#858585]">
                    Profit per hour
                  </div>

                  <div className="mt-[5px] flex items-center gap-[4px]">
                    <img
                      src="/domine/coinicon.png"
                      alt=""
                      className="h-[16px] w-[16px] object-contain"
                    />

                    <span className="text-[11px] text-white">
                      +100 Coin
                    </span>
                  </div>

                </div>

                {/* Bottom divider */}
                <div className="absolute bottom-[32px] left-[8px] right-[8px] h-px bg-[#454342]" />

                {/* Level */}
                <div className="absolute bottom-[10px] left-[10px] text-[9px] text-white">
                  level 12
                </div>

                {/* Vertical divider */}
                <div className="absolute bottom-[8px] left-1/2 h-[18px] w-px bg-[#454342]" />

                {/* 4M */}
                <div className="absolute bottom-[10px] right-[22px] flex items-center gap-[4px] text-[9px] text-white">

                  <img
                    src="/domine/coinicon.png"
                    alt=""
                    className="h-[14px] w-[14px] object-contain"
                  />

                  <span>4M</span>

                </div>

              </button>
            ))}

          </div>

        </section>


        {/* ================================================= */}
        {/* BOTTOM NAVIGATION */}
        {/* ================================================= */}

        <nav className="absolute bottom-[20px] left-1/2">
            <Footer />
        </nav>

      </div>
    </div>
    </PageTransition>
   
  );
}