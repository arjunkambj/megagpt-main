"use client";

import type { IconProps } from "@iconify/react";

import React from "react";
import { Link } from "@heroui/link";
import { Icon } from "@iconify/react";

type SocialIconProps = Omit<IconProps, "icon">;

const footerNavigation = {
  usefulLinks: [
    { name: "Home", href: "#" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ],
  legal: [
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Cookies", href: "#" },
    { name: "Data Processing", href: "#" },
  ],
  social: [
    {
      name: "Twitter",
      href: "#",
      icon: (props: SocialIconProps) => <Icon {...props} icon="mdi:twitter" />,
    },
    {
      name: "Discord",
      href: "#",
      icon: (props: SocialIconProps) => <Icon {...props} icon="mdi:discord" />,
    },
    {
      name: "GitHub",
      href: "#",
      icon: (props: SocialIconProps) => <Icon {...props} icon="mdi:github" />,
    },
    {
      name: "Telegram",
      href: "#",
      icon: (props: SocialIconProps) => <Icon {...props} icon="mdi:telegram" />,
    },
  ],
};

export default function Component() {
  const renderList = React.useCallback(
    ({
      title,
      items,
    }: {
      title: string;
      items: { name: string; href: string }[];
    }) => (
      <div>
        <h3 className="text-small font-semibold text-white">{title}</h3>
        <ul className="mt-6 space-y-4">
          {items.map((item) => (
            <li key={item.name}>
              <Link
                className="text-white/70 hover:text-teal-400 transition-colors"
                href={item.href}
                size="sm"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ),
    [],
  );

  return (
    <footer
      className="flex justify-center items-center mt-10 w-full border-t border-white/20 flex-col backdrop-blur-md bg-black/40"
      id="contact"
    >
      <div className="max-w-7xl px-6 pb-8 pt-16 sm:pt-15 lg:px-8 lg:pt-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="space-y-8 md:w-1/3 md:pr-8">
            <div className="flex items-center justify-start">
              <span className="flex items-center gap-2">
                <span className="text-medium font-medium text-white">
                  MegaGPT
                </span>
              </span>
            </div>
            <p className="text-small text-white/70">
              MegaGPT unifies all AI models in one platform. Access OpenAI,
              Claude, Gemini and more in a single subscription with Web3
              capabilities.
            </p>
            <div className="flex space-x-6">
              {footerNavigation.social.map((item) => (
                <Link
                  key={item.name}
                  isExternal
                  className="text-white/70 hover:text-teal-400 transition-colors"
                  href={item.href}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="w-6" />
                </Link>
              ))}
            </div>
          </div>

          {/* footer links */}
          <div className="mt-16 grid grid-cols-2 md:w-1/3 gap-5 xl:col-span-2 xl:mt-0">
            <div>
              {renderList({
                title: "Useful Links",
                items: footerNavigation.usefulLinks,
              })}
            </div>
            <div>
              {renderList({
                title: "Legal",
                items: footerNavigation.legal,
              })}
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/20 pt-8 text-center text-small text-white/60">
          <p>© {new Date().getFullYear()} MegaGPT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
