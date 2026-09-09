"use client";

import { useMemo, useState } from "react";

type Wallet = {
  id: string;
  name: string;
  image: string;
};

type WalletPageProps = {
  onClose?: () => void;
  onNavigate?: (page: string) => void;
  onWalletSelect?: (wallet: Wallet) => void;
};

const wallets: Wallet[] = [
  {
    id: "binance",
    name: "Binance",
    image: "/wallet/Binance.png",
  },
  {
    id: "huobi",
    name: "Huobi",
    image: "/wallet/Huobi.png",
  },
  {
    id: "bybit",
    name: "ByBit",
    image: "/wallet/ByBit.png",
  },
  {
    id: "okx",
    name: "OKX",
    image: "/wallet/OKX.png",
  },
  {
    id: "upbit",
    name: "UpBit",
    image: "/wallet/UpBit.png",
  },
  {
    id: "gate",
    name: "Gate",
    image: "/wallet/Gate.png",
  },
  {
    id: "coinbase",
    name: "CoinBase",
    image: "/wallet/CoinBase.png",
  },
  {
    id: "kucoin",
    name: "KuCoin",
    image: "/wallet/KuCoin.png",
  },
];

import BeeHeader from "@/components/beeheader";
import Footer from "@/components/footer";
import WalletSearchButton from "@/components/wallet-searchbutton";

export default function WalletPage({
  onClose,
  onNavigate,
  onWalletSelect,
}: WalletPageProps) {
  const [search, setSearch] = useState("");
  const [selectedWallet, setSelectedWallet] = useState("binance");

  const filteredWallets = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    if (!keyword) {
      return wallets;
    }

    return wallets.filter((wallet) =>
      wallet.name.toLowerCase().includes(keyword)
    );
  }, [search]);

  const handleWalletSelect = (wallet: Wallet) => {
    setSelectedWallet(wallet.id);
    onWalletSelect?.(wallet);
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white">
      {/* ================================================= */}
      {/* EXACT SCREEN: 393 x 694 */}
      {/* ================================================= */}

      <main className="relative h-[694px] w-[393px] shrink-0 overflow-hidden rounded-[22px] bg-black text-white">

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <BeeHeader />

        {/* ================================================= */}
        {/* HERO */}
        {/* ================================================= */}

        <section className="absolute left-0 top-[65px] h-[88px] w-full">

          {/* Left bee */}
          <img
            src="/flyingbeeicon.png"
            alt=""
            className="
              absolute
              left-[17px]
              top-[8px]
              h-[40px]
              w-[40px]
              object-contain
              rotate-45
            "
          />

          {/* Right bee */}
          <img
            src="/domine/returnbeeicon.png"
            alt=""
            className="
              absolute
              right-[17px]
              top-[8px]
              h-[50px]
              w-[50px]
              object-contain
            "
          />

          {/* Title */}
          <h1
            className="
              absolute
              left-0
              top-[19px]
              w-full
              text-center
              text-[30px]
              font-extrabold
              leading-[36px]
              tracking-[-1px]
              text-[#ffad00]
            "
          >
            Wallet
          </h1>

          {/* Subtitle */}
          <p
            className="
              absolute
              left-0
              top-[61px]
              w-full
              text-center
              text-[10px]
              leading-[13px]
              text-[#eeeeee]
            "
          >
            Change settings according to yourself
          </p>

        </section>


        {/* ================================================= */}
        {/* SEARCH */}
        {/* ================================================= */}

        <section className="absolute left-[23px] top-[162px] w-[347px]">

            <WalletSearchButton />

        </section>


        {/* ================================================= */}
        {/* WALLET LIST */}
        {/* ================================================= */}

        <section className="absolute left-[23px] top-[212px] w-[347px]">

          <div className="grid grid-cols-3 gap-[7px]">

            {filteredWallets.map((wallet) => {
              const selected = selectedWallet === wallet.id;

              return (
                <button
                  key={wallet.id}
                  type="button"
                  onClick={() => handleWalletSelect(wallet)}
                  className={`
                    relative
                    flex
                    h-[32px]
                    w-[111px]
                    items-center
                    rounded-[6px]
                    border
                    px-[8px]
                    text-left
                    transition-all
                    active:scale-[0.98]
                    ${
                      selected
                        ? "border-[#ffad00] bg-[#141414]"
                        : "border-[#3b3938] bg-black"
                    }
                  `}
                >

                  {/* Wallet logo */}
                  <img
                    src={wallet.image}
                    alt=""
                    className="
                      h-[18px]
                      w-[18px]
                      shrink-0
                      object-contain
                    "
                  />

                  {/* Name */}
                  <span
                    className="
                      ml-[5px]
                      min-w-0
                      flex-1
                      truncate
                      text-[8px]
                      leading-[10px]
                      text-[#d8d8d8]
                    "
                  >
                    {wallet.name}
                  </span>

                  {/* Radio */}
                  <span
                    className={`
                      flex
                      h-[10px]
                      w-[10px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      ${
                        selected
                          ? "border-[#ffad00]"
                          : "border-[#5c5c5c]"
                      }
                    `}
                  >
                    {selected && (
                      <span className="h-[6px] w-[6px] rounded-full bg-[#ffad00]" />
                    )}
                  </span>

                </button>
              );
            })}

          </div>

          {/* No results */}
          {filteredWallets.length === 0 && (
            <div className="mt-[15px] text-center text-[10px] text-[#777]">
              No wallet found
            </div>
          )}

        </section>


        {/* ================================================= */}
        {/* BOTTOM NAVIGATION */}
        {/* ================================================= */}

        <nav
          className="
            absolute
            bottom-[20px]
            left-1/2
          "
        >
            <Footer />
        </nav>

      </main>
    </div>
  );
}