import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import chalk from "chalk";
import { Role } from "@prisma/client";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getMessagesHistoryforAI } from "@/actions/user-action";

export async function POST(req: Request) {
  const { messages, chatId, id } = await req.json();

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  console.log(chalk.red(id));

  const systemPrompt =
    "You are a helpful assistant that act as web3 crypto solana degen who talk like a pirate and you are in a conversation with a user.";

  try {
    const lastmessage = messages[messages.length - 1];

    const chatHistory = await getMessagesHistoryforAI(chatId);

    const updatedChat = [
      ...(chatHistory || []),
      {
        role: "user",
        content: lastmessage.content,
      },
    ];

    const conversation = updatedChat.map((message) => ({
      role: message.role as Role,
      content: message.content,
    }));

    const result = streamText({
      model: openai("gpt-4o-mini"),
      system: systemPrompt,
      messages: conversation,
      onFinish: async (result) => {
        await updateChat(chatId, lastmessage.id, "user", lastmessage.content);
        await updateChat(chatId, lastmessage.id, "assistant", result.text);
      },
    });

    for await (const chunk of result.textStream) {
      process.stdout.write(chalk.green(chunk));
    }

    return result.toDataStreamResponse();
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process conversation: " + error },
      { status: 500 }
    );
  }
}

// Update the chat in the database
const updateChat = async (
  chatId: string,
  id: string,
  role: string,
  content: string
) => {
  await prisma.chat.update({
    where: { id: chatId },
    data: {
      messages: {
        create: {
          id: id,
          role: role as Role,
          content: content,
        },
      },
    },
  });
};
