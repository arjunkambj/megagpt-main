import { Icon } from "@iconify/react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Link } from "@heroui/link";
import { Chip } from "@heroui/chip";
import { Tooltip } from "@heroui/tooltip";
import { Avatar } from "@heroui/avatar";
import React from "react";

import { getUser } from "@/actions/user-action";

export default function UserStat() {
  const user = React.use(getUser());

  return (
    <Card className="max-w-xs w-full h-full bg-black text-white bg-default-50  border-none shadow-none">
      <CardHeader className="flex flex-col items-center pb-2">
        <div className="flex flex-col items-center">
          <Avatar
            isBordered
            className="w-40 h-40 mb-3"
            radius="full"
            size="lg"
            src={user?.image as string}
          />
          <h2 className="text-xl font-semibold text-white mb-1">
            {user?.name}
          </h2>
          <p className="text-sm text-gray-400 mb-3">{user?.email}</p>
          <Chip className="bg-teal-500 border-none" color="secondary">
            {user?.subscriptionType}
          </Chip>
        </div>
      </CardHeader>

      <CardBody className="px-6 py-4">
        <div className="bg-[#111] rounded-lg px-4 py-5 mb-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium text-white">Message Usage</h3>
          </div>

          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium text-white">Standard</span>
              <span className="text-gray-300">0/100</span>
            </div>
            <div className="w-full h-1.5 bg-gray-800 rounded-full mb-1 overflow-hidden">
              <div
                className="h-full bg-teal-500"
                style={{
                  width: `0%`,
                }}
              />
            </div>
            <p className="text-xs text-gray-400 mb-4">100 messages remaining</p>

            <div className="flex justify-between text-sm mb-1">
              <div className="flex items-center">
                <span className="font-medium text-white mr-1">Premium</span>
                <Tooltip content="Premium messages">
                  <span>
                    <Icon
                      className="text-gray-500"
                      icon="mdi:information-outline"
                      width={16}
                    />
                  </span>
                </Tooltip>
              </div>
              <span className="text-gray-300">61/500</span>
            </div>
            <div className="w-full h-1.5 bg-gray-800 rounded-full mb-1 overflow-hidden">
              <div className="h-full bg-teal-500" style={{ width: "61%" }} />
            </div>
            <p className="text-xs text-gray-400">439 messages remaining</p>
          </div>
        </div>

        <Link
          isDisabled
          className="flex items-center justify-center w-full text-sm font-medium text-teal-500 mb-4"
        >
          Buy more premium credits
          <Icon className="ml-1" icon="mdi:chevron-right" width={16} />
        </Link>
      </CardBody>
    </Card>
  );
}
