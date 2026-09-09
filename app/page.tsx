"use client";

import Image from "next/image";
import BeeHeader from "@/components/beeheader";
import { useRouter } from "next/navigation";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  const router=useRouter();

  return (
    <PageTransition>
         <main className="flex min-h-screen items-center justify-center bg-white">
      {/* 393 × 674 App Screen */}
      <div className="relative h-[674px] w-[393px] overflow-hidden bg-black">

        {/* Top glow */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            top-0
            h-[300px]
            bg-[radial-gradient(circle_at_50%_10%,rgba(91,53,8,0.32),transparent_65%)]
          "
        />

        <BeeHeader />

        {/* Bee */}
        <div className="absolute left-1/2 top-[150px] z-20 w-[285px] -translate-x-1/2">
          <Image
            src="/bee.png"
            alt="Bee"
            width={570}
            height={570}
            priority
            className="h-auto w-full object-contain"
          />
        </div>

        <div className="absolute left-1/2 top-[250px] z-30 w-[285px] -translate-x-1/2">
          <Image
            src="/grid.png"
            alt="Bee"
            width={570}
            height={570}
            priority
            className="h-auto w-full object-contain"
          />
        </div>

        {/* Another picture UNDER the bee */}
        <div className="absolute left-1/2 top-[400px] z-10 w-[180px] -translate-x-1/2">
          <Image
            src="/downpane.png"
            alt="Second picture"
            width={360}
            height={200}
            className="h-auto w-full object-contain"
          />
        </div>

        {/* Start button */}
        <button
          className="
            absolute
            bottom-[24px]
            left-1/2
            h-[47px]
            w-[315px]
            -translate-x-1/2
            rounded-[10px]
            bg-gradient-to-r
            from-[#ff8a00]
            to-[#ff7900]
            text-[13px]
            font-semibold
            text-white
            transition
            active:scale-[0.98]
          "
          onClick={()=>router.push("/home")}
        >
          Start Now
        </button>
      </div>
    </main>
    </PageTransition>
   
  );
}