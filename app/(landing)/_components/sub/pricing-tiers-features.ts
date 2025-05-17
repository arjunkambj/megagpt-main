import type { PricingFeatures } from "./pricing-comparison-types";

import { TiersEnum } from "./pricing-types";

const features: PricingFeatures = [
  {
    title: "AI Models",
    items: [
      {
        title: "o1-mini access",
        tiers: {
          [TiersEnum.Free]: true,
          [TiersEnum.Pro]: true,
          [TiersEnum.Team]: true,
        },
        helpText: "Access to the o1-mini model for basic AI text generation.",
      },
      {
        title: "Gemini 2.0 Flash access",
        tiers: {
          [TiersEnum.Free]: true,
          [TiersEnum.Pro]: true,
          [TiersEnum.Team]: true,
        },
        helpText:
          "Access to Google's Gemini 2.0 Flash model for quick responses.",
      },
      {
        title: "OpenAI GPT models",
        tiers: {
          [TiersEnum.Free]: false,
          [TiersEnum.Pro]: true,
          [TiersEnum.Team]: true,
        },
        helpText:
          "Access to OpenAI's GPT models including GPT-4o and other variants.",
      },
      {
        title: "Claude models",
        tiers: {
          [TiersEnum.Free]: false,
          [TiersEnum.Pro]: true,
          [TiersEnum.Team]: true,
        },
        helpText:
          "Access to Anthropic's Claude models for exceptional reasoning capabilities.",
      },
      {
        title: "Qwen models",
        tiers: {
          [TiersEnum.Free]: false,
          [TiersEnum.Pro]: true,
          [TiersEnum.Team]: true,
        },
        helpText: "Access to Alibaba's Qwen models for multilingual support.",
      },
    ],
  },
  {
    title: "Credits & Usage",
    items: [
      {
        title: "Monthly credits",
        tiers: {
          [TiersEnum.Free]: "Limited usage",
          [TiersEnum.Pro]: "10K credits",
          [TiersEnum.Team]: "28K credits",
        },
        helpText:
          "Credits for using AI models each month. Different models consume different amounts of credits based on their capabilities.",
      },
      {
        title: "Rollover credits",
        tiers: {
          [TiersEnum.Free]: false,
          [TiersEnum.Pro]: false,
          [TiersEnum.Team]: true,
        },
        helpText:
          "Unused credits roll over to the next month (up to 3 months).",
      },
      {
        title: "Additional credits purchase",
        tiers: {
          [TiersEnum.Free]: false,
          [TiersEnum.Pro]: true,
          [TiersEnum.Team]: true,
        },
        helpText: "Option to purchase additional credits as needed.",
      },
    ],
  },
  {
    title: "Web3 Features",
    items: [
      {
        title: "Web3 authentication",
        tiers: {
          [TiersEnum.Free]: false,
          [TiersEnum.Pro]: true,
          [TiersEnum.Team]: true,
        },
        helpText:
          "Secure authentication using blockchain technology and wallet connectivity.",
      },
      {
        title: "Crypto payments",
        tiers: {
          [TiersEnum.Free]: false,
          [TiersEnum.Pro]: true,
          [TiersEnum.Team]: true,
        },
        helpText: "Pay for services using cryptocurrency.",
      },
      {
        title: "Agentic capabilities",
        tiers: {
          [TiersEnum.Free]: false,
          [TiersEnum.Pro]: true,
          [TiersEnum.Team]: true,
        },
        helpText:
          "AI agents that can perform tasks like crypto trading on your behalf.",
      },
      {
        title: "Multi-Chain Protocol support",
        tiers: {
          [TiersEnum.Free]: false,
          [TiersEnum.Pro]: true,
          [TiersEnum.Team]: true,
        },
        helpText:
          "Integration with multi-chain protocols for cross-chain operations.",
      },
    ],
  },
  {
    title: "Advanced Features",
    items: [
      {
        title: "Live web search",
        tiers: {
          [TiersEnum.Free]: false,
          [TiersEnum.Pro]: false,
          [TiersEnum.Team]: true,
        },
        helpText:
          "Real-time web search capability integrated with AI responses.",
      },
      {
        title: "Document processing",
        tiers: {
          [TiersEnum.Free]: false,
          [TiersEnum.Pro]: false,
          [TiersEnum.Team]: true,
        },
        helpText:
          "Upload and process documents for AI analysis and question answering.",
      },
      {
        title: "Advanced analytics",
        tiers: {
          [TiersEnum.Free]: false,
          [TiersEnum.Pro]: false,
          [TiersEnum.Team]: true,
        },
        helpText:
          "Detailed usage analytics and insights for your AI interactions.",
      },
    ],
  },
  {
    title: "Support",
    items: [
      {
        title: "Community support",
        tiers: {
          [TiersEnum.Free]: true,
          [TiersEnum.Pro]: true,
          [TiersEnum.Team]: true,
        },
        helpText: "Access to community forums and knowledge base articles.",
      },
      {
        title: "Email support",
        tiers: {
          [TiersEnum.Free]: "Limited",
          [TiersEnum.Pro]: true,
          [TiersEnum.Team]: true,
        },
        helpText: "Direct email support for questions and issues.",
      },
      {
        title: "Priority support",
        tiers: {
          [TiersEnum.Free]: false,
          [TiersEnum.Pro]: true,
          [TiersEnum.Team]: true,
        },
        helpText: "Faster response times for support inquiries.",
      },
      {
        title: "Dedicated account manager",
        tiers: {
          [TiersEnum.Free]: false,
          [TiersEnum.Pro]: false,
          [TiersEnum.Team]: true,
        },
        helpText: "A dedicated account manager to help with your needs.",
      },
    ],
  },
];

export default features;
