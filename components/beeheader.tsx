 
export default function BeeHeader() {
  return (
    <div>
              {/* Header */}
              <header
                className="
                  relative
                  z-10
                  grid
                  h-[65px]
                  grid-cols-[1fr_auto_1fr]
                  items-start
                  px-[22px]
                  pt-[19px]
                "
              >
                {/* Close */}
                <button className="justify-self-start text-[12px] text-white">
                  Close
                </button>
      
                {/* Title */}
                <div className="text-center leading-none">
                  <div className="flex items-center justify-center gap-[3px] text-[12px] font-semibold text-white">
                    <span>$BEE Trade</span>
      
                    <span className="flex h-[9px] w-[9px] items-center justify-center rounded-full bg-[#4285f4] text-[6px] text-white">
                      ✓
                    </span>
                  </div>
      
                  <div className="mt-[5px] text-[8px] text-white/80">
                    mini app
                  </div>
                </div>
      
                {/* Menu */}
                <button
                  className="
                    flex
                    h-[19px]
                    w-[19px]
                    items-center
                    justify-center
                    justify-self-end
                    rounded-full
                    border
                    border-white/50
                    text-[12px]
                    text-white
                  "
                >
                  ⋯
                </button>
              </header>
    </div>
  );
}