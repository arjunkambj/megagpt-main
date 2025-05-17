"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";
import { Tab, Tabs } from "@heroui/tabs";

import { FrequencyEnum, Tier, Frequency } from "./sub/pricing-types";
import { tiers, frequencies } from "./sub/pricing-tiers";

export default function Component() {
  const [selectedFrequency, setSelectedFrequency] = React.useState<Frequency>(
    frequencies.find((f) => f.key === FrequencyEnum.Monthly) || frequencies[0],
  );

  const onFrequencyChange = (key: React.Key) => {
    const newFrequency = frequencies.find((f) => f.key === key);

    if (newFrequency) {
      setSelectedFrequency(newFrequency);
    }
  };

  return (
    <section className="relative w-full py-10 md:py-20" id="pricing">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="relative z-10 mx-auto max-w-4xl text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="">
            <h2 className="font-medium text-teal-400">Pricing</h2>
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white">
            Simple, transparent pricing
          </h1>
          <p className="mt-6 text-large text-white/80">
            Get unlimited access to all AI models with a simple monthly
            subscription. No hidden fees, no token limits.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <Tabs
            classNames={{
              tabList: "bg-black/30 border border-white/20 backdrop-blur-md",
              cursor: "bg-teal-500/80",
              tab: "data-[hover-unselected=true]:opacity-90 text-white",
            }}
            radius="full"
            selectedKey={selectedFrequency.key}
            onSelectionChange={onFrequencyChange}
          >
            {frequencies.map((frequency) => (
              <Tab key={frequency.key} title={frequency.label} />
            ))}
          </Tabs>
        </div>

        <div className="relative z-10 mt-16 grid gap-8 md:grid-cols-3">
          {tiers.map((tier: Tier, index: number) => (
            <Card
              key={index}
              className={`rounded-xl border border-white/20 bg-black/40 p-6 backdrop-blur-md shadow-xl transition-all duration-200 hover:scale-[1.01] ${
                tier.mostPopular ? "border-teal-400/50" : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              {tier.mostPopular ? (
                <Chip
                  className="absolute right-4 top-4"
                  color="primary"
                  variant="flat"
                >
                  Most Popular
                </Chip>
              ) : null}
              <CardHeader className="flex flex-col items-start gap-2 pb-6">
                <h2 className="text-large font-medium text-white">
                  {tier.title}
                </h2>
                <p className="text-medium text-white/70">{tier.description}</p>
              </CardHeader>
              <Divider className="bg-white/20" />
              <CardBody className="gap-8">
                <p className="flex items-baseline gap-1 pt-2">
                  <span className="inline text-4xl font-semibold leading-7 tracking-tight text-white">
                    {typeof tier.price === "string"
                      ? tier.price
                      : tier.price[selectedFrequency.key]}
                  </span>
                  {typeof tier.price !== "string" ? (
                    <span className="text-small font-medium text-white/60">
                      {tier.priceSuffix
                        ? `/${tier.priceSuffix}/${selectedFrequency.priceSuffix}`
                        : `/${selectedFrequency.priceSuffix}`}
                    </span>
                  ) : null}
                </p>
                <ul className="flex flex-col gap-2">
                  {tier.features?.map((feature: string) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Icon
                        className="text-teal-400"
                        icon="ci:check"
                        width={24}
                      />
                      <p className="text-white/70">{feature}</p>
                    </li>
                  ))}
                </ul>
              </CardBody>
              <CardFooter>
                <Button
                  fullWidth
                  as={Link}
                  className={`${tier.mostPopular ? "bg-teal-500 text-white hover:bg-teal-400" : "bg-black/60 border border-white/20 text-white hover:bg-black/80"} transition-colors`}
                  href={tier.href}
                >
                  {tier.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
