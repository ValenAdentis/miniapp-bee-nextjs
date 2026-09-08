"use client";
import Image from "next/image";

import { useEffect,useRef, useState } from "react";

export default function ConnectWallet() {
  const [isEditing, setIsEditing] = useState(false);
  const [wallet, setWallet] = useState("");
  const leftPartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // If the click is NOT inside the left part,
      // show the bee + text again.
      if (
        leftPartRef.current &&
        !leftPartRef.current.contains(event.target as Node)
      ) {
        setIsEditing(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isEmpty = wallet.trim() === "";

  return (
    <div className="w-full px-0 justify-center absolute flex">
      <div className="flex h-[46px] w-[347px] items-center gap-2 rounded-[10px] bg-[#292929] px-[7px] justify-between">
        
        {/* Left input pane */}
        <div
            ref={leftPartRef}
          onClick={() => setIsEditing(true)}
          className="flex h-full min-w-0 flex-1 cursor-text items-center"
        >
          {!isEditing ? (
            <>
            {/* Show bee + default text ONLY when value is empty */}
              {isEmpty ? (
                <>
                  <div className="mr-[5px] flex h-[24px] w-[24px] shrink-0 items-center justify-center">
                    <Image
                      src="/smallbee.png"
                      alt="Bee"
                      width={570}
                      height={570}
                      priority
                      className="h-auto w-full object-contain"
                      />
                  </div>
                    

                  <span className="truncate text-[11px] text-white">
                    Merry Merry (CEO)
                  </span>
                </>
              ) : (
                // Value exists → don't show bee or default text
                <span className="truncate text-[11px] text-white">
                  {wallet}
                </span>
              )}
            </>
          ) : (
            <>
            <input
              autoFocus
              value={wallet}
              onChange={(e) => setWallet(e.target.value)}
              className="h-full w-full bg-transparent text-[11px] text-white outline-none"
            />
            </>
          )}
        </div>

        {/* Connect Wallet button */}
        <button
          type="button"
          className="flex h-[29px] shrink-0 items-center rounded-[9px] bg-[#ff8a00] px-[10px] text-[10px] font-medium text-white transition active:scale-95"
        >
          {/* Wallet icon */}
          <span className="mr-[3px] text-[11px]">▣</span>

          <span>Connect Wallet</span>

          <span className="ml-[3px] text-[13px]">›</span>
        </button>
      </div>
    </div>
  );
}