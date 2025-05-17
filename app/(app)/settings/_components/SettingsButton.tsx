"use client";

import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";
import { redirect } from "next/navigation";

import { signOut } from "@/lib/auth-client";

export default function SettingsButton() {
  const handleLogout = async () => {
    await signOut();
    redirect("/login");
  };

  return (
    <div className="flex justify-between gap-4 w-full max-w-7xl px-5 py-6">
      <Button
        as={Link}
        className="bg-transparent hover:text-teal-500 font-medium transform transition-all duration-300 hover:scale-105 hover:-translate-x-1"
        href="/dashboard"
        startContent={<Icon icon="mdi:arrow-left" width={18} />}
      >
        Back to MegaGPT
      </Button>
      <Button
        className="bg-transparent hover:text-danger font-medium transform transition-all duration-300 hover:scale-105 hover:translate-x-1"
        variant="flat"
        onPress={handleLogout}
      >
        Logout
        <Icon icon="mdi:arrow-right" width={18} />
      </Button>
    </div>
  );
}
