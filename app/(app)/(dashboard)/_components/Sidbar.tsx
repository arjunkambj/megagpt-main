import React from "react";
import { Suspense } from "react";

import UserProfile from "./Userprofile";
import SidebarMain from "./sub/sidebar-main";

import UserSuspense from "@/components/suspense/UserSuspense";

export default async function Sidebar() {
  return (
    <div className="flex w-full h-full relative">
      <SidebarMain>
        <div className="mt-auto  flex flex-col">
          <Suspense fallback={<UserSuspense />}>
            <UserProfile />
          </Suspense>
        </div>
      </SidebarMain>
    </div>
  );
}
