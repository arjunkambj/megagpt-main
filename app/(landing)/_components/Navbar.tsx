"use client";

import type { NavbarProps } from "@heroui/navbar";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import Link from "next/link";
import { Button } from "@heroui/button";

const navItems = [
  { name: "Home", href: "#" },
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

const menuItems = [
  { name: "Home", href: "#" },
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

export default function NavMain(props: NavbarProps) {
  // Handle smooth scrolling
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");

    if (href?.startsWith("#")) {
      const targetId = href === "#" ? "top" : href.substring(1);
      const element =
        targetId === "top"
          ? window.document.body
          : document.getElementById(targetId);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <Navbar
      {...props}
      classNames={{
        base: "sticky top-0 z-50 py-5 backdrop-filter-none bg-transparent",
        wrapper: "px-0 w-full justify-center bg-transparent",
        item: "hidden md:flex",
      }}
      height="60px"
    >
      <NavbarContent
        className="gap-4 md:gap-12 rounded-full border border-white/20 bg-black/40 px-4 py-1 shadow-xl backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/30"
        justify="center"
      >
        {/* Toggle */}
        <NavbarMenuToggle className="ml-2 text-white md:hidden" />

        {/* Logo */}
        <NavbarBrand className="mr-2 w-[40vw] md:w-auto md:max-w-fit">
          <Link
            className="flex items-center gap-2.5"
            href="#"
            onClick={handleNavClick}
          >
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
            <span className="font-medium text-white">MegaGPT</span>
          </Link>
        </NavbarBrand>

        {/* Items */}
        <div className="flex items-center gap-6">
          {navItems.map((item, index) => (
            <NavbarItem
              key={`nav-${index}`}
              className={index === 0 ? "hidden md:flex" : ""}
            >
              <Link
                className="text-white/90 mx-2 hover:text-white hover:scale-105 transition-all duration-300 text-sm font-medium"
                href={item.href}
                onClick={handleNavClick}
              >
                {item.name}
              </Link>
            </NavbarItem>
          ))}
          <NavbarItem>
            {/* <Link
              className="text-default-500 hover:text-secondary hover:scale-105 transition-colors"
              href="/contact"
            >
              Contact
            </Link> */}
          </NavbarItem>
        </div>

        <Button
          as={Link}
          className="bg-teal-500 text-white hover:bg-teal-400 transition-colors px-6 py-1.5 text-base"
          href="/login"
          radius="full"
        >
          Get started
        </Button>
      </NavbarContent>

      {/* Menu */}
      <NavbarMenu
        className="top-[calc(var(--navbar-height)/2)] mx-auto mt-16 max-h-[40vh] max-w-[80vw] rounded-large border border-white/20 bg-black/60 py-6 shadow-xl backdrop-blur-md backdrop-saturate-150"
        motionProps={{
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
          transition: {
            ease: "easeInOut",
            duration: 0.2,
          },
        }}
      >
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className="w-full text-white/90 hover:text-white transition-colors"
              href={item.href}
              onClick={handleNavClick}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
