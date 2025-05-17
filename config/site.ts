export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "MegaChat - Advanced AI Assistant",
  description:
    "Experience intelligent conversations with the most advanced AI chatbot platform. Get instant answers, creative content, and personalized assistance.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Features",
      href: "/features",
    },
    {
      label: "Use Cases",
      href: "/use-cases",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ],
  navMenuItems: [
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "My Chats",
      href: "/chats",
    },
    {
      label: "Saved Prompts",
      href: "/prompts",
    },
    {
      label: "Chatbot Gallery",
      href: "/gallery",
    },
    {
      label: "Account Settings",
      href: "/settings",
    },
    {
      label: "Upgrade Plan",
      href: "/upgrade",
    },
    {
      label: "Help Center",
      href: "/help",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/megachat",
    twitter: "https://twitter.com/megachat_ai",
    discord: "https://discord.gg/megachat",
    docs: "https://docs.megachat.ai",
    support: "https://support.megachat.ai",
  },
};
