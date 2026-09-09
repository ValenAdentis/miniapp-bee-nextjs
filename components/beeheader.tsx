"use client";

import { useEffect, useRef, useState } from "react";
import {useRouter} from "next/navigation";

export default function BeeHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const router=useRouter();

  /*
   * ============================================
   * POPUP BUTTON FUNCTIONS
   * ============================================
   */

  const handleRefresh = () => {
    console.log("Refresh clicked");

    window.location.reload();
  };

  const handleSearch =() => {
    router.push("/boost");
  };

  const handleWallet = () => {
    router.push("/wallet");
  };

  const handleSetting = () => {
    router.push("/settings");
  };

  /*
   * ============================================
   * CLOSE APP
   * ============================================
   */

  const handleClose = () => {
    console.log("Close clicked");

    /*
     * If this component is running inside
     * another app/page, put your close logic here.
     */

    window.close();
  };

  /*
   * ============================================
   * CLOSE POPUP WHEN CLICKING OUTSIDE
   * ============================================
   */

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  /*
   * ============================================
   * POPUP MENU
   * ============================================
   */

  const popupButtons = [
    {
      id: "search",
      label: "Search",
      action: handleSearch,
    },
    {
      id: "wallet",
      label: "Wallet",
      action: handleWallet,
    },
    {
      id: "setting",
      label: "Setting",
      action: handleSetting,
    },
    {
      id: "refresh",
      label: "Refresh",
      action: handleRefresh,
    },
  ];

  /*
   * ============================================
   * POPUP BUTTON CLICK
   * ============================================
   */

  const handlePopupButton = async (
    action: () => void | Promise<void>
  ) => {
    setMenuOpen(false);

    await action();
  };

  /*
   * ============================================
   * UI
   * ============================================
   */

  return (
    <header
      className="
        relative
        z-50
        grid
        h-[65px]
        w-full
        grid-cols-[1fr_auto_1fr]
        items-start
        px-[22px]
        pt-[19px]
      "
    >
      {/* ========================================
          CLOSE BUTTON
      ======================================== */}

      <button
        type="button"
        onClick={handleClose}
        className="
          justify-self-start
          text-[12px]
          leading-none
          text-white
          transition-opacity
          active:opacity-60
        "
      >
        Close
      </button>


      {/* ========================================
          CENTER TITLE
      ======================================== */}

      <div className="text-center leading-none">

        <div
          className="
            flex
            items-center
            justify-center
            gap-[3px]
            text-[12px]
            font-semibold
            text-white
          "
        >
          <span>$BEE Trade</span>

          {/* Verified */}
          <span
            className="
              flex
              h-[9px]
              w-[9px]
              items-center
              justify-center
              rounded-full
              bg-[#4285f4]
              text-[6px]
              font-bold
              leading-none
              text-white
            "
          >
            ✓
          </span>
        </div>

        <div
          className="
            mt-[5px]
            text-[8px]
            leading-none
            text-white/80
          "
        >
          mini app
        </div>

      </div>


      {/* ========================================
          RIGHT MENU
      ======================================== */}

      <div
        ref={menuRef}
        className="
          relative
          justify-self-end
        "
      >

        {/* Dots button */}

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="
            flex
            h-[19px]
            w-[19px]
            items-center
            justify-center
            rounded-full
            border
            border-white/50
            text-[12px]
            leading-none
            text-white
            transition-transform
            active:scale-90
          "
        >
          <span className="mb-[3px] tracking-[-1px]">
            ⋯
          </span>
        </button>


        {/* ======================================
            POPUP MENU
        ====================================== */}

        {menuOpen && (
          <div
            className="
              absolute
              right-0
              top-[27px]
              z-[100]
              w-[135px]
              overflow-hidden
              rounded-[9px]
              border
              border-[#41403f]
              bg-[#242323]
              shadow-[0_8px_25px_rgba(0,0,0,0.65)]
            "
          >

            {popupButtons.map((button) => (
              <button
                key={button.id}
                type="button"
                onClick={() =>
                  handlePopupButton(button.action)
                }
                className="
                  flex
                  h-[34px]
                  w-full
                  items-center
                  px-[12px]
                  text-left
                  text-[10px]
                  text-white
                  transition-colors
                  hover:bg-[#333130]
                  active:bg-[#3c3a39]
                "
              >
                {button.label}
              </button>
            ))}

          </div>
        )}

      </div>
    </header>
  );
}