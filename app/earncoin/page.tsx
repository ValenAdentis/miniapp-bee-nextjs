"use client";

type EarnPageProps = {
  onClose?: () => void;
  onRedeem?: (task: string) => void;
  onNavigate?: (page: string) => void;
};

const tasks = [
  {
    id: "video",
    title: "Watch video to earn",
    image: "/watchvideoicon.png",
    active: true,
  },
  {
    id: "daily",
    title: "Daily Reward",
    image: "/dailyrewardicon.png",
    active: false,
  },
  {
    id: "telegram",
    title: "Join Telegram",
    image: "/jointelegramicon.png",
    active: true,
  },
  {
    id: "youtube",
    title: "Watch youtube",
    image: "/watchyoutubeicon.png",
    active: false,
  },
  {
    id: "innovation",
    title: "Fun and innovation",
    image: "/funandinnovationicon.png",
    active: true,
  },
  {
    id: "facebook",
    title: "Follow on Facebook",
    image: "/facebookicon.png",
    active: false,
  },
  {
    id: "instagram",
    title: "Follow on Instagram",
    image: "/instagramicon.png",
    active: true,
  },
];

const navigation = [
  {
    id: "playgame",
    label: "Playgame",
    image: "/images/playgame.png",
  },
  {
    id: "mine",
    label: "Mine",
    image: "/images/mine.png",
  },
  {
    id: "home",
    label: "Home",
    image: "/images/home.png",
  },
  {
    id: "earn",
    label: "Earn",
    image: "/images/earn.png",
    active: true,
  },
  {
    id: "airdrop",
    label: "Airdrop",
    image: "/images/airdrop.png",
  },
];

import BeeHeader from "@/components/beeheader";
import Footer from "@/components/footer";

export default function EarnPage({
  onClose,
  onRedeem,
  onNavigate,
}: EarnPageProps) {
  return (
    <div className="flex min-h-screen justify-center bg-white items-center">

      <div className="relative overflow-hidden h-[694px] w-[393px] bg-black rounded-[22px]">

        {/* ================================================== */}
        {/* HEADER */}
        {/* ================================================== */}

        <BeeHeader />

        {/* ================================================== */}
        {/* HERO */}
        {/* ================================================== */}

        <section className="relative h-[87px] w-full">

          {/* Left bee */}
          <img
            src="/flyingbeeicon.png"
            alt=""
            className="transform rotate-45 absolute left-[17px] top-[9px] h-[32px] w-[35px] object-contain"
          />

          {/* Right bee */}
          <img
            src="/returnbeeicon.png"
            alt=""
            className="absolute right-[17px] top-[9px] h-[40px] w-[40px] object-contain"
          />

          <h1 className="absolute left-0 top-[20px] w-full text-center text-[30px] font-extrabold leading-[36px] tracking-[-1px] text-[#ffad00]">
            Earn more coins
          </h1>

          <p className="absolute left-0 top-[60px] w-full text-center text-[11px] leading-[13px] text-[#d0d0d0]">
            Make our tasks to get more coins
          </p>

        </section>


        {/* ================================================== */}
        {/* TASKS */}
        {/* ================================================== */}

        <section className="absolute left-0 top-[148px] w-full px-[23px]">

          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex h-[63px] w-full items-center border-b border-[#4a3d26]"
            >

              {/* Icon box */}
              <div className="flex h-[43px] w-[43px] shrink-0 items-center justify-center overflow-hidden rounded-[9px] border border-[#3c3c3c] bg-[#171717]">
                <img
                  src={task.image}
                  alt=""
                  className="h-[28px] w-[28px] object-contain"
                />
              </div>


              {/* Text */}
              <div className="ml-[9px] min-w-0 flex-1">

                <div className="text-[9px] leading-[11px] text-[#a5a5a5]">
                  500 Points
                </div>

                <div className="truncate text-[13px] text-white font-medium leading-[16px]">
                  {task.title}
                </div>

                <button
                  type="button"
                  onClick={() => onRedeem?.(task.id)}
                  className="flex h-[12px] items-center text-[9px] leading-[12px] text-[#ffad00]"
                >
                  Get reward
                  <span className="ml-[2px] text-[11px]">
                    ›
                  </span>
                </button>

              </div>


              {/* Redeem button */}
              <button
                type="button"
                disabled={!task.active}
                onClick={() => {
                  if (task.active) {
                    onRedeem?.(task.id);
                  }
                }}
                className={[
                  "h-[32px] w-[85px] shrink-0 rounded-[9px]",
                  "text-[11px] font-medium leading-none transition active:scale-95",
                  task.active
                    ? "bg-gradient-to-b from-[#ffae1a] to-[#ff8800] text-white"
                    : "cursor-not-allowed bg-[#403e3f] text-[#777]",
                ].join(" ")}
              >
                Redeem
              </button>

            </div>
          ))}

        </section>


        {/* ================================================== */}
        {/* BOTTOM NAVIGATION */}
        {/* ================================================== */}

        <nav className="absolute  bottom-[20px] left-1/2">

          <Footer />

        </nav>

      </div>
    </div>
  );
}