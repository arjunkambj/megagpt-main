import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";
import { Divider } from "@heroui/divider";

const featureItems = [
  {
    title: "All AI Models Support",
    description:
      "Access all major AI models including OpenAI, Claude, Qwen, and many more in one unified platform.",
    icon: "fluent:brain-circuit-24-filled",
  },
  {
    title: "MCP Support",
    description:
      "Full integration with Multi-Chain Protocol for seamless cross-chain interactions and operations.",
    icon: "mdi:link-variant",
  },
  {
    title: "Web3 Authentication",
    description:
      "Secure, decentralized authentication using blockchain technology for enhanced privacy and control.",
    icon: "fluent:shield-keyhole-24-filled",
  },
  {
    title: "Web3 Payments",
    description:
      "Seamless cryptocurrency payments integration with multiple token support and instant transactions.",
    icon: "fluent:payment-24-filled",
  },
  {
    title: "Agentic Capabilities",
    description:
      "Autonomous agents that can purchase and sell crypto, execute trades, and perform tasks on your behalf.",
    icon: "mdi:robot",
  },
  {
    title: "Decentralized Data Storage",
    description:
      "Your data remains private and secure with our decentralized storage infrastructure.",
    icon: "fluent:database-24-filled",
  },
];

export default function Features() {
  return (
    <section className="relative w-full py-10 md:py-16" id="features">
      {/* Background gradient effect */}
      {/* <div
        aria-hidden="true"
        className="fixed inset-x-0 top-3 z-0 h-full w-full transform-gpu overflow-hidden blur-3xl md:right-20 md:h-auto md:w-auto md:px-36"
      >
        <div
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary-500 to-secondary-500 opacity-30 dark:opacity-[.15]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div> */}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="">
            <h2
              className="font-medium text-teal-400"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Features
            </h2>
          </div>
          <h1
            className="mt-5 text-4xl font-medium tracking-tight text-white"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Advanced Web3 Capabilities
          </h1>
          <p
            className="mt-6 text-large text-white/80"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Mega GPT combines cutting-edge AI with Web3 technology to create a
            unique platform with powerful capabilities.
          </p>
        </div>

        <div className="relative z-10 mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featureItems.map((feature, index) => (
            <Card
              key={index}
              className="rounded-xl border border-white/20 bg-black/40 p-3 backdrop-blur-md shadow-xl transition-all duration-200 hover:scale-[1.02]"
              data-aos="fade-up"
              data-aos-delay={100 + index * 50}
            >
              <CardHeader className="flex items-start gap-4 pb-2">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-teal-500/20">
                  <Icon
                    className="text-teal-400"
                    icon={feature.icon}
                    width={28}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                </div>
              </CardHeader>
              <Divider className="my-2 bg-white/20" />
              <CardBody className="py-2">
                <p className="text-white/70">{feature.description}</p>
              </CardBody>
              <CardFooter>
                <Button
                  className="text-white hover:text-teal-400 transition-colors font-medium"
                  endContent={
                    <Icon
                      className="text-white hover:text-teal-400 [&>path]:stroke-[2]"
                      icon="solar:arrow-right-linear"
                      width={18}
                    />
                  }
                  variant="light"
                >
                  Learn more
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
