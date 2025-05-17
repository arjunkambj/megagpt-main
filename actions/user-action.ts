"use server";

import { headers } from "next/headers";

import prisma from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function getUser() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: {
      id: true,
      email: true,
      name: true,
      image: true,
      subscriptionType: true,
    },
  });

  return user;
}

export async function deleteChat(id: string) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return null;
  }
  try {
    await prisma.chat.delete({
      where: { id: id, userId: session.user.id },
    });

    return { success: true };
  } catch (error) {
    return { success: false, error: error };
  }
}

export async function getUIforUI(id: string) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return null;
  }

  const messages = await prisma.message.findMany({
    where: { chatId: id },
    select: {
      id: true,
      content: true,
      createdAt: true,
      role: true,
    },
  });

  return messages;
}

export async function getMessagesHistoryforAI(id: string) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return null;
  }

  const chats = await prisma.message.findMany({
    where: { chatId: id },
    select: {
      content: true,
      role: true,
    },
  });

  return chats || [];
}
