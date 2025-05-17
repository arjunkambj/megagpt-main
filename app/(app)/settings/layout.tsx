import SettingsButton from "./_components/SettingsButton";
import UserStat from "./_components/UserStat";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col bg-default-50 justify-center items-center w-full h-screen">
      <SettingsButton />
      <div className="flex flex-col gap-4 max-w-7xl px-5 py-6 w-full h-full rounded-lg shadow-sm">
        <div className="flex w-full h-full flex-row gap-4">
          <UserStat />
          <div className="flex flex-col w-full h-full">{children}</div>
        </div>
      </div>
    </div>
  );
}
