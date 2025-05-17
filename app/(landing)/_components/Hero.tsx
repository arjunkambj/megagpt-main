import React from "react";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex max-w-screen flex-col py-10 md:py-20">
      <main className="flex flex-col items-center rounded-2xl px-3 md:rounded-3xl md:px-0">
        <section className="z-20 my-14 flex flex-col items-center justify-center gap-[18px] sm:gap-6">
          <Button
            className="h-9 overflow-hidden border border-white/20 bg-black/40 backdrop-blur-md px-[18px] py-2 text-small font-normal leading-5 text-white"
            endContent={
              <Icon
                className="flex-none outline-none text-white [&>path]:stroke-[2]"
                icon="solar:arrow-right-linear"
                width={20}
              />
            }
            radius="full"
            variant="bordered"
          >
            All AI models in one place
          </Button>
          <div className="text-center text-[clamp(44px,12vw,52px)] font-bold leading-[1.15] tracking-tighter sm:text-[72px]">
            <div className="text-white">
              One platform, <br /> every AI at your fingertips.
            </div>
          </div>
          <p className="text-center font-normal leading-7 text-white/80 sm:w-[466px] sm:text-[18px]">
            MegaGPT unifies GPT-4, Claude, Gemini, and more in a single
            subscription. Save money, save time, and get the best answers—every
            time.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
            <Button
              as={Link}
              className="h-10 w-[163px] border border-white/20 bg-white/10 backdrop-blur-md px-[16px] py-[10px] text-small font-medium leading-5 text-white hover:bg-white/20 transition-colors"
              href="/register"
              radius="full"
              variant="bordered"
            >
              Get Started Free
            </Button>
            <Button
              as={Link}
              className="h-10 w-[163px] border border-white/20 bg-black/40 backdrop-blur-md px-[16px] py-[10px] text-small font-medium leading-5 text-white hover:bg-black/50 transition-colors"
              endContent={
                <Icon
                  className="text-white ml-1 [&>path]:stroke-[1.5]"
                  icon="solar:stars-minimalistic-linear"
                  width={18}
                />
              }
              href="/pricing"
              radius="full"
              variant="bordered"
            >
              Subscribe Now
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
