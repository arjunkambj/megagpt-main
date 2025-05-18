"use client";

import { Card, CardBody } from "@heroui/card";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Textarea } from "@heroui/input";

export default function Account() {
  return (
    <Card className="max-w-md shadow-none w-full">
      <CardBody className="gap-6">
        <div>
          <h1 className="block  mb-2">What should MegaGPT call you?</h1>
          <Input defaultValue="" placeholder="Your name" />
        </div>
        <div>
          <h1 className="block  mb-2">What do you do?</h1>
          <Input defaultValue="" placeholder="Your job" />
        </div>
        <div>
          <h1 className="block  mb-2">What traits should MegaGPT have?</h1>
          <Textarea minRows={3} placeholder="Witty, Funny, Pirate, etc." />
        </div>

        <div>
          <h1 className="block mb-2">
            Anything else MegaGPT should know about you?
          </h1>
          <Textarea minRows={3} placeholder="Anything else" />
        </div>

        <div className="flex justify-end mt-4">
          <Button className="bg-teal-500 text-white px-6 py-2">
            Save Preferences
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
