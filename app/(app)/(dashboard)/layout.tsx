import Sidebar from "./_components/Sidbar";
import DashboardHeader from "./_components/sub/dashboard-header";

import QueryProvider from "@/components/queryProvider";
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryProvider>
      <div className="relative flex h-dvh w-screen ">
        <div className="">
          <Sidebar />
        </div>
        <div className="relative flex flex-col items-center bg-default-50 h-full  w-full z-5">
          <DashboardHeader />
          {children}
        </div>
      </div>
    </QueryProvider>
  );
}
