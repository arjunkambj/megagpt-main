import { Avatar } from "@heroui/avatar";
import React from "react";
import Link from "next/link";

import { getUser } from "@/actions/user-action";

export default async function UserProfile() {
  const user = await getUser();

  return (
    <Link className="block" href="/settings">
      <div className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-default-100 transition-colors">
        <Avatar
          fallback={user?.name?.charAt(0) || "U"}
          size="sm"
          src={user?.image as string}
        />
        <div>
          <p className="text-sm font-medium">{user?.name || "User"}</p>
          <p className="text-xs  text-muted-foreground">
            {user?.subscriptionType || ""}
          </p>
        </div>
      </div>
    </Link>
  );
}
