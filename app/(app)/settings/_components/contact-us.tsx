"use client";

import { Card, CardHeader, CardBody } from "@heroui/card";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Textarea } from "@heroui/input";
import { addToast } from "@heroui/toast";

export default function ContactUs() {
  return (
    <Card className="max-w-md shadow-none w-full">
      <CardHeader className="flex gap-1 flex-col">
        <h2 className="text-xl font-bold">Contact Support</h2>
        <p className="text-sm text-default-500">We are here to help</p>
      </CardHeader>
      <CardBody className="gap-4">
        <Input label="Subject" placeholder="How can we help?" />
        <Textarea
          label="Message"
          minRows={4}
          placeholder="Describe your issue..."
        />
        <Button
          className="mt-2 bg-teal-500"
          onPress={() => {
            addToast({
              title: "Message sent",
              description: "We will get back to you as soon as possible",
            });
          }}
        >
          Send Message
        </Button>
      </CardBody>
    </Card>
  );
}
