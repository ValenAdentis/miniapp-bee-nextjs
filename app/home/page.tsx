"use client";

import Image from "next/image";

import BeeHeader from "@/components/beeheader";
import ConnectWallet from "@/components/connectwallet";
import IconButton from "@/components/iconbutton";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center bg-white items-center">
      <div className="relative h-[778px] w-[393px] overflow-hidden bg-black text-white rounded-[22px]">

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <BeeHeader />

        {/* ================================================= */}
        {/* WALLET / USER BAR */}
        {/* ================================================= */}

        <ConnectWallet />
        
        {/* ================================================= */}
        {/* MENU ICONS */}
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

        <div className="absolute left-1/2 top-[250px] w-[399px] -translate-x-1/2">
          <Image
            src="/winbee.png"
            alt="Bee"
            width={570}
            height={570}
            priority
            className="h-auto w-full object-contain"
          />
        </div>
        


        {/* ================================================= */}
        {/* TAP BEE BUTTON */}
        {/* ================================================= */}

        <button
          className="
            absolute
            left-1/2
            top-[498px]
            z-30
            flex
            h-[35px]
            w-[96px]
            -translate-x-1/2
            items-center
            justify-center
            gap-[4px]
            rounded-[9px]
            bg-[#ff8508]
            text-[10px]
            font-medium
            text-white
            font-sans
          "
        >
          <img
            src="/pointericon.png"
            alt="Pointer"
            className="h-[17px] w-[21px] object-contain"
          />

          <span>Tap Bee</span>
        </button>

        {/* ================================================= */}
        {/* SCORE */}
        {/* ================================================= */}

        <section
          className="
            absolute
            left-1/2
            top-[563px]
            -translate-x-1/2
            text-center
          "
        >
          {/* Score */}
          <div className="flex items-center justify-center">
            <img
              src="/flyingbeeicon.png"
              alt="Pointer"
              className="h-[32px] w-[35.14px] object-contain"
            />

            <span
              className="
                text-[37px]
                font-extrabold
                leading-none
                tracking-[-1px]
              "
            >
              109 343
            </span>
          </div>

          {/* Energy */}
          <div
            className="
              mt-[7px]
              flex
              items-center
              justify-center
              gap-[3px]
              text-[15px]
            "
          >
          <img
            src="/strikeicon.png"
            alt="Pointer"
            className="h-[17px] w-[11.35px] object-contain"
          />

            <span>998/1000</span>
          </div>
        </section>

        {/* ================================================= */}
        {/* BOTTOM NAVIGATION */}
        {/* ================================================= */}

        <nav
          className="
            absolute
            bottom-[26px]
            left-1/2
            z-50
            h-[65px]
            w-[315px]
            -translate-x-1/2
          "
        >
          <Footer />
        </nav>

      </div>
    </main>
  );
}


/* ===================================================== */
/* MENU ITEM                                             */
/* ===================================================== */

function MenuItem({
  icon,
  label,
}: {
  icon: string;
  label: string;
}) {
  return (
    <button className="flex w-[55px] flex-col items-center">
      <div
        className="
          flex
          h-[43px]
          w-[43px]
          items-center
          justify-center
          rounded-[10px]
          bg-[#292929]
          text-[21px]
        "
      >
        {icon}
      </div>

      <span
        className="
          mt-[5px]
          whitespace-nowrap
          text-[8px]
          text-white
        "
      >
        {label}
      </span>
    </button>
  );
}


/* ===================================================== */
/* BOTTOM NAV ITEM                                       */
/* ===================================================== */

function NavItem({
  icon,
  label,
  active = false,
}: {
  icon: string;
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={`
        flex
        flex-col
        items-center
        justify-center
        gap-[2px]
        ${
          active
            ? "text-[#ff8508]"
            : "text-white/60"
        }
      `}
    >
      <span
        className={`
          text-[22px]
          leading-none
          ${
            active
              ? "font-bold"
              : ""
          }
        `}
      >
        {icon}
      </span>

      <span className="text-[8px]">
        {label}
      </span>
    </button>
  );
}