import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

import prisma from "@/lib/prisma";
import { generateTitleFromUserMessage } from "@/actions/ai-action";

export async function POST(req: Request) {
  const { messages, chatId } = await req.json();

  const title = await generateTitleFromUserMessage({
    message: messages,
  });

  await prisma.chat.update({
    where: { id: chatId },
    data: { title },
  });

  revalidatePath(`/dashboard/${chatId}`);

  return NextResponse.json({ title });
}
