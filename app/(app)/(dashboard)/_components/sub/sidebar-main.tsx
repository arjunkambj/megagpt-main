"use client";

import React from "react";
import { ScrollShadow } from "@heroui/scroll-shadow";
import { Spacer } from "@heroui/spacer";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";
import { useDisclosure } from "@heroui/use-disclosure";
import { useAtom } from "jotai";
import Link from "next/link";

import SidebarDrawer from "./sidebar-drawer";
import ChatHistory from "./chat-history";

import { isSidebarOpenAtom } from "@/app/(app)/atom/sidebaratoms";

export default function SidebarMain({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen, onOpenChange } = useDisclosure();
  const [isSidebarOpen] = useAtom(isSidebarOpenAtom);

  const content = (
    <div className="flex h-screen w-72 flex-1 flex-col p-6  ">
      {/* Header and Logo */}
      <div className="flex items-center px-2 gap-2">
        <span className="relative h-8 w-8">
          <svg
            fill="none"
            height="32"
            viewBox="0 0 32 32"
            width="32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2Z"
              fill="#0d9488"
            />
            <path
              d="M16 6C10.4772 6 6 10.4772 6 16C6 21.5228 10.4772 26 16 26C21.5228 26 26 21.5228 26 16C26 10.4772 21.5228 6 16 6Z"
              fill="#F5f5f5"
            />
            <path
              d="M16 10C12.6863 10 10 12.6863 10 16C10 19.3137 12.6863 22 16 22C19.3137 22 22 19.3137 22 16C22 12.6863 19.3137 10 16 10Z"
              fill="#0d9488"
            />
          </svg>
        </span>
        <span className="font-medium">MegaGPT</span>
      </div>

      {/* Spacer */}
      <Spacer y={8} />

      {/* New Chat Button */}
      <Button
        fullWidth
        as={Link}
        className="mb-6 mt-2 h-[44px] justify-start font-medium gap-3 bg-default-foreground px-3 py-[10px] text-default-50"
        href="/dashboard"
        startContent={
          <Icon
            className="text-default-50"
            icon="solar:chat-round-dots-linear"
            width={24}
          />
        }
      >
        New Chat
      </Button>

      {/* ScrollArea */}
      <ScrollShadow
        hideScrollBar
        className="-mr-6 h-full max-h-full pr-6 overflow-y-auto  [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        <ChatHistory />
      </ScrollShadow>

      <Spacer y={8} />

      {children}
    </div>
  );

  return (
    <div className="">
      {isSidebarOpen && (
        <SidebarDrawer
          className="h-full flex-none bg-[#111] block  md:relative overflow-hidden"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
        >
          {content}
        </SidebarDrawer>
      )}
    </div>
  );
}
