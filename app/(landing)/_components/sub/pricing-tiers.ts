import type { Frequency, Tier } from "./pricing-types";

import { FrequencyEnum, TiersEnum } from "./pricing-types";

export const frequencies: Array<Frequency> = [
  { key: FrequencyEnum.Yearly, label: "Pay Yearly", priceSuffix: "per year" },
  {
    key: FrequencyEnum.Monthly,
    label: "Pay Monthly",
    priceSuffix: "per month",
  },
];

export const tiers: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Free",
    price: "Free",
    href: "/login",
    featured: false,
    mostPopular: false,
    description: "For casual users who want to try Mega GPT.",
    features: [
      "Access to o1-mini model",
      "Access to Gemini 2.0 Flash",
      "Basic chat functionality",
      "Community support",
    ],
    buttonText: "Get Started Free",
    buttonColor: "default",
    buttonVariant: "flat",
  },
  {
    key: TiersEnum.Pro,
    title: "Pro",
    description:
      "For individuals and small teams who need more powerful models.",
    href: "/login",
    mostPopular: true,
    price: {
      yearly: "$134.23",
      monthly: "$15.99",
    },
    featured: false,
    features: [
      "Access to all AI models",
      "10K credits per month",
      "Web3 authentication",
      "Agentic capabilities",
      "Priority support",
    ],
    buttonText: "Get started",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Team,
    title: "Premium",
    href: "/login",
    featured: true,
    mostPopular: false,
    description: "For power users and businesses with intensive AI needs.",
    price: {
      yearly: "$201.60",
      monthly: "$24",
    },
    features: [
      "Everything in Pro plan",
      "28K credits per month",
      "Live search capability",
      "Document processing",
      "Advanced analytics",
    ],
    buttonText: "Subscribe Now",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];
