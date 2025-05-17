"use client";

import React from "react";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";
import { useAtom } from "jotai";
import Link from "next/link";

import ModelSelector from "../ModelSelector";

import { isSidebarOpenAtom } from "@/app/(app)/atom/sidebaratoms";

export default function DashboardHeader() {
  const [isSidebarOpen, setIsSidebarOpen] = useAtom(isSidebarOpenAtom);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const newChat = () => {
    return;
  };

  return (
    <div className="flex absolute top-4 left-3 z-50 gap-2">
      <Button
        isIconOnly
        className="sticky top-0"
        variant="flat"
        onPress={toggleSidebar}
      >
        <Icon
          height={24}
          icon={"solar:sidebar-minimalistic-linear"}
          width={24}
        />
      </Button>
      <ModelSelector />
      {!isSidebarOpen && (
        <Button
          isIconOnly
          as={Link}
          className="sticky top-0"
          href="/dashboard"
          variant="flat"
          onPress={newChat}
        >
          <Icon height={24} icon={"solar:add-circle-linear"} width={24} />
        </Button>
      )}
    </div>
  );
}
