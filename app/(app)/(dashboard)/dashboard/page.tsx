import { v4 as uuidv4 } from "uuid";

import Chat from "../_components/Chat";

export default function Dashboard() {
  const chatId = uuidv4();
  const isDashboard = true;

  return (
    <section className="relative h-full max-w-2xl  flex justify-center items-center">
      <Chat chatId={chatId} isDashboard={isDashboard} />
    </section>
  );
}
