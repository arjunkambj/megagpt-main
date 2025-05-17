"use client";

import { useChat } from "@ai-sdk/react";

import AssistantMessage from "./AssistantMessage";
import UserMessage from "./UserMessage";
import InputPrompt from "./InputPrompt";

export default function Chat({
  initialMessages,
  chatId,
  isDashboard,
}: {
  initialMessages?: any[] | null;
  chatId: string;
  isDashboard: boolean;
}) {
  const model = "Mic test 123";

  const { messages, input, setInput, handleInputChange, handleSubmit } =
    useChat({
      api: "/api/chat",
      body: {
        chatId: chatId,
        model: model,
      },
    });

  const UIMessages = [...(initialMessages || [])];

  messages.forEach((message) => {
    if (!UIMessages.some((m) => m.id === message.id)) {
      UIMessages.push({
        id: message.id,
        role: message.role === "user" ? "user" : "assistant",
        content: message.content,
      });
    }
  });

  if (isDashboard) {
    return (
      <div className="flex flex-col justify-center px-5 items-center">
        <InputPrompt
          chatId={chatId}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          input={input}
          isDashboard={isDashboard}
          setInput={setInput}
        />
      </div>
    );
  }

  return (
    <div className=" flex flex-col justify-center items-center  w-full gap-3">
      <div className="flex items-center w-full max-w-2xl  flex-col pt-8 md:pt-9 mb-20 gap-4">
        {/* Chat messages */}
        <div className="w-full h-full px-4">
          <div className="flex flex-col w-full gap-5">
            {UIMessages.map((message: any) => (
              <div key={message.id} className="w-auto flex justify-end">
                {message.role === "user" ? (
                  <UserMessage key={message.id} message={message.content} />
                ) : (
                  <AssistantMessage
                    key={message.id}
                    message={message.content}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Input prompt */}
        <div className="fixed bottom-3 px-5 max-w-2xl w-full">
          <InputPrompt
            chatId={chatId}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            input={input}
            isDashboard={isDashboard}
            setInput={setInput}
          />
        </div>
      </div>
    </div>
  );
}
