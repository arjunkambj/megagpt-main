import Chat from "../../_components/Chat";

import { getUIforUI } from "@/actions/user-action";

export default async function ChatPage({
  params,
}: {
  params: Promise<{ chatid: string }>;
}) {
  const { chatid } = await params;
  const initialMessages = await getUIforUI(chatid);
  const isDashboard = false;

  return (
    <div className="relative  items-center h-full w-full overflow-y-auto md:h-[calc(100vh-145px)] flex flex-col pt-15 md:pt-9 gap-4">
      <Chat
        chatId={chatid}
        initialMessages={initialMessages}
        isDashboard={isDashboard}
      />
    </div>
  );
}
