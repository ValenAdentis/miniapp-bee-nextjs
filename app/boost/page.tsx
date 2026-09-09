"use client";

type HomePageProps = {
  onClose?: () => void;
  onMenu?: () => void;
  onProfile?: () => void;
  onDailyReward?: () => void;
  onDailyCipher?: () => void;
  onDailyCombo?: () => void;
  onSettings?: () => void;
  onKeys?: () => void;
  onTapBee?: () => void;
  onBoost?: () => void;
  onNavigate?: (page: string) => void;
};

const menuItems = [
  {
    id: "daily-reward",
    label: "Daily reward",
    image: "/images/daily-reward.png",
  },
  {
    id: "daily-cipher",
    label: "Daily cipher",
    image: "/images/daily-cipher.png",
  },
  {
    id: "daily-combo",
    label: "Daily combo",
    image: "/images/daily-combo.png",
  },
  {
    id: "settings",
    label: "Settings",
    image: "/images/settings.png",
  },
  {
    id: "keys",
    label: "Keys",
    image: "/images/keys.png",
  },
];

import BeeHeader from "@/components/beeheader";
import BinanceButton from "@/components/boost-binancebutton";
import Image from "next/image";
import IconButton from "@/components/iconbutton";
import Footer from "@/components/footer";
import DailyButton from "@/components/booster-searchbutton";

export default function HomePage({
  onClose,
  onMenu,
  onProfile,
  onDailyReward,
  onDailyCipher,
  onDailyCombo,
  onSettings,
  onKeys,
  onTapBee,
  onBoost,
  onNavigate,
}: HomePageProps) {
  const handleMenuClick = (id: string) => {
    switch (id) {
      case "daily-reward":
        onDailyReward?.();
        break;
      case "daily-cipher":
        onDailyCipher?.();
        break;
      case "daily-combo":
        onDailyCombo?.();
        break;
      case "settings":
        onSettings?.();
        break;
      case "keys":
        onKeys?.();
        break;
    }
  };

  return (
    /*
     * Center the exact 393 x 778 application screen
     * horizontally and vertically.
     */
    <div className="flex min-h-screen w-full items-center justify-center bg-white">

      {/* ================================================= */}
      {/* EXACT SCREEN: 393 x 778 */}
      {/* ================================================= */}

        <div className="relative h-[778px] w-[393px] shrink-0 overflow-hidden bg-black text-white rounded-[22px]">

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <BeeHeader />

        {/* ================================================= */}
        {/* PROFILE BAR */}
        {/* ================================================= */}

        <section className="left-1/2 flex justify-center items-center">

          <BinanceButton />

        </section>


        {/* ================================================= */}
        {/* QUICK MENU */}
        {/* ================================================= */}

        <section
            className="
            absolute
            left-[20px]
            top-[130px]
            flex
            w-[353px]
            justify-between
            "
            >
            <IconButton
                text="Daily reward"
                src="/boxicon.png"
                onClick={() => console.log("Daily reward")}
            />
        
            <IconButton
                text="Daily cipher"
                src="/checkicon.png"
                onClick={() => console.log("Daily cipher")}

            />
          <IconButton
                    text="Daily combo"
                    src="/dooricon.png"
                    onClick={() => console.log("Daily combo")}
            />
        
            <IconButton
                    text="Settings"
                    src="/settingicon.png"
                    onClick={() => console.log("Settings")}
            />
        
            <IconButton
                    text="Keys"
                    src="/keyicon.png"
                    onClick={() => console.log("Keys")}
            />
        </section>


        {/* ================================================= */}
        {/* MAIN BEE */}
        {/* ================================================= */}

        <div className="absolute -rotate-90 left-1/2 top-[218px] z-20 w-[285px] -translate-x-1/2">
          <Image
            src="/boost/boxerbee.png"
            alt="Bee"
            width={570}
            height={570}
            priority
            className="h-auto w-full object-contain"
          />
        </div>

        <div className="absolute left-1/2 top-[300px] z-10 w-[285px] -translate-x-1/2">
          <Image
            src="/grid.png"
            alt="Bee"
            width={570}
            height={570}
            priority
            className="h-auto w-full object-contain"
          />
        </div>


        {/* ================================================= */}
        {/* TAP BEE + BOOST */}
        {/* ================================================= */}

        <section
          className="
            absolute
            left-1/2
            top-[509px]
            flex
            -translate-x-1/2
            items-center
            gap-[8px]
          "
        >

          <button
            type="button"
            onClick={onTapBee}
            className="
              flex
              h-[34px]
              w-[96px]
              items-center
              justify-center
              gap-[4px]
              rounded-[9px]
              bg-gradient-to-b
              from-[#ffae19]
              to-[#ff8700]
              text-[10px]
              font-medium
              text-white
              active:scale-[0.97]
            "
          >
            <img
              src="/boost/pointer.png"
              alt=""
              className="h-[24px] w-[24px] object-contain"
            />

            <span>Tap Bee</span>
          </button>

          <button
            type="button"
            onClick={onBoost}
            className="
              flex
              h-[34px]
              w-[74px]
              items-center
              justify-center
              gap-[4px]
              rounded-[22px]
              bg-gradient-to-b
              from-[#aaff19]
              to-[#63d900]
              text-[10px]
              font-medium
              text-white
              active:scale-[0.97]
            "
          >
            <img
              src="/boost/rocket.png"
              alt=""
              className="h-[15px] w-[15px] object-contain"
            />

            <span>Boost</span>
          </button>

        </section>


        {/* ================================================= */}
        {/* BALANCE */}
        {/* ================================================= */}

        <section className="absolute left-0 top-[558px] w-full text-center">

          <div className="flex items-center justify-center">

            <img
              src="/flyingbeeicon.png"
              alt=""
              className="mr-[5px] h-[32px] w-[35px] object-contain"
            />

            <span
              className="
                text-[37px]
                font-extrabold
                leading-[40px]
                tracking-[-1px]
              "
            >
              109 343
            </span>

          </div>

          <div className="mt-[4px] flex items-center justify-center">

            <span className="mr-[3px] text-[19px] leading-none text-[#ffad00]">
              ⚡
            </span>

            <span className="text-[13px] leading-[16px] text-[#dedede]">
              998/1000
            </span>

          </div>

        </section>


        {/* ================================================= */}
        {/* DAILY CIPHER */}
        {/* ================================================= */}

        <section className="absolute left-[23px] top-[629px] w-[347px]">

          <DailyButton />

        </section>


        {/* ================================================= */}
        {/* BOTTOM NAVIGATION */}
        {/* ================================================= */}

        <nav className="absolute bottom-[20px] left-1/2">
            <Footer />
        </nav>

      </div>
    </div>
  );
}