"use client";

import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import { Badge } from "@heroui/badge";
import { addToast } from "@heroui/toast";

export default function Billing() {
  return (
    <Card className="max-w-md bg-default-50 shadow-none w-full">
      <CardHeader className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">Subscription</h2>
          <p className="text-sm text-default-500">Manage your plan</p>
        </div>
        <Badge color="success">Active</Badge>
      </CardHeader>
      <CardBody>
        <div className="border rounded-lg p-4 mb-4">
          <div className="font-bold">Free Plan</div>
          <div className="text-sm text-default-500">
            Basic features included
          </div>
        </div>
      </CardBody>
      <CardFooter>
        <Button
          className="bg-teal-500 text-white"
          variant="flat"
          onPress={() => {
            addToast({
              title: "Upgrade Plan",
              description: "You are already on the free plan",
              color: "success",
            });
          }}
        >
          Upgrade Plan
        </Button>
      </CardFooter>
    </Card>
  );
}
