"use client";

import React from "react";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Icon } from "@iconify/react";

import faqs from "./sub/faq-data";

export default function Component() {
  return (
    <section
      className="relative mx-auto w-full max-w-6xl px-0 pt-10 md:pt-20 pb-15  md:pb-28 md:px-6 lg:px-8"
      id="faq"
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-16">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="">
            <h2
              className="font-medium text-teal-400"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              FAQ
            </h2>
          </div>
          <h1
            className="text-4xl font-medium tracking-tight text-white"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Frequently Asked Questions
          </h1>
          <p
            className="mt-6 text-large text-white/80"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Everything you need to know about Mega GPT and its features
          </p>
        </div>

        <Accordion
          fullWidth
          keepContentMounted
          className="gap-3"
          data-aos="fade-up"
          data-aos-delay="400"
          itemClasses={{
            base: "px-6 border border-white/20 bg-black/40 backdrop-blur-md shadow-md hover:bg-black/50 rounded-xl",
            title: "font-medium text-white",
            trigger: "py-6",
            content: "pt-0 pb-6 text-base text-white/70",
          }}
          items={faqs}
          selectionMode="multiple"
          variant="splitted"
        >
          {faqs.map((item, i) => (
            <AccordionItem
              key={i}
              indicator={
                <Icon className="text-teal-400" icon="lucide:plus" width={24} />
              }
              title={item.title}
            >
              {item.content}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
