"use client";
import PageTransition from "@/components/PageTransition";

type SettingsPageProps = {
  onClose?: () => void;
  onLanguage?: () => void;
  onWallet?: () => void;
  onShare?: () => void;
  onNavigate?: (page: string) => void;
};

const settings = [
  {
    id: "language",
    title: "Choose Your language",
    subtitle: "Selected Language ›",
    button: "English ›",
    icon: "/settings/language.png",
    src:"/settings/english.png"
  },
  {
    id: "wallet",
    title: "Choose Your Wallet",
    subtitle: "Selected Exchange ›",
    button: "Binance ›",
    icon: "/settings/wallet.png",
    src:"/settings/binance.png"
  },
  {
    id: "share",
    title: "Share Link",
    subtitle: "telegram/userid/link ›",
    button: "Share ›",
    icon: "/settings/share.png",
    src:"/settings/shareicon.png"
  },
];

import BeeHeader from "@/components/beeheader";
import Footer from "@/components/footer";

export default function SettingsPage({
  onClose,
  onLanguage,
  onWallet,
  onShare,
  onNavigate,
}: SettingsPageProps) {
  const handleSetting = (id: string) => {
    if (id === "language") onLanguage?.();
    if (id === "wallet") onWallet?.();
    if (id === "share") onShare?.();
  };

  return (
    <PageTransition>
      <div className="flex min-h-screen w-full items-center justify-center bg-white">
      {/* ================================================= */}
      {/* EXACT APP SIZE: 393 x 694 */}
      {/* ================================================= */}

      <main className="relative h-[694px] w-[393px] shrink-0 overflow-hidden  bg-black text-white">

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
            Settings
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
        {/* SETTINGS LIST */}
        {/* ================================================= */}

        <section className="absolute left-[23px] top-[157px] w-[347px]">

          {settings.map((item, index) => (
            <div key={item.id}>

              {/* Row */}
              <div
                className="
                  flex
                  h-[53px]
                  w-full
                  items-center
                "
              >

                {/* Icon */}
                <button
                  type="button"
                  onClick={() => handleSetting(item.id)}
                  className="
                    flex
                    h-[43px]
                    w-[43px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-[9px]
                    border
                    border-[#393838]
                    bg-[#1b1b1b]
                  "
                >
                  <img
                    src={item.icon}
                    alt=""
                    className="
                      h-[27px]
                      w-[27px]
                      object-contain
                    "
                  />
                </button>

                {/* Text */}
                <button
                  type="button"
                  onClick={() => handleSetting(item.id)}
                  className="
                    ml-[9px]
                    min-w-0
                    flex-1
                    text-left
                  "
                >
                  <div
                    className="
                      text-[13px]
                      font-medium
                      leading-[15px]
                      text-white
                    "
                  >
                    {item.title}
                  </div>

                  <div
                    className="
                      mt-[3px]
                      text-[8px]
                      leading-[10px]
                      text-[#ffad00]
                    "
                  >
                    {item.subtitle}
                  </div>
                </button>

                {/* Action */}
                <button
                  type="button"
                  onClick={() => handleSetting(item.id)}
                  className="
                    flex
                    h-[31px]
                    w-[89px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-[9px]
                    bg-gradient-to-b
                    from-[#ffad17]
                    to-[#ff8700]
                    text-[9px]
                    font-medium
                    text-white
                    active:scale-[0.97]
                    gap-[5px]
                  "
                >
                  <img
                    src={item.src}
                    alt=""
                    className="h-[14px] w-[14px] object-contain"
                    />
                    <span>{item.button}</span> 

                </button>

              </div>

              {/* Divider */}
              {index < settings.length - 1 && (
                <div className="h-px w-full bg-[#4a3d2b]" />
              )}

            </div>
          ))}

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
            <Footer name="xxx" />
        </nav>

      </main>
    </div>
    </PageTransition>
    
  );
}