"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import { Listbox, ListboxItem, ListboxSection } from "@heroui/listbox";
import { Icon } from "@iconify/react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import { deleteChat } from "@/actions/user-action";

interface Chat {
  id: string;
  title: string;
}

export function RecentPromptDropdown({
  id,
  onDelete,
}: {
  id: string;
  onDelete: () => void;
}) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Icon
          className="text-default-500 opacity-0 group-hover:opacity-100"
          icon="solar:menu-dots-bold"
          width={24}
        />
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Dropdown menu with icons"
        className="py-2"
        variant="faded"
      >
        <DropdownItem
          key="delete"
          className="text-danger-500 data-[hover=true]:text-danger-500"
          color="danger"
          startContent={
            <Icon
              className="text-danger-500"
              height={20}
              icon="solar:trash-bin-minimalistic-linear"
              width={20}
            />
          }
          onClick={async () => {
            await deleteChat(id);
            onDelete();
          }}
        >
          Delete
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default function ChatHistory() {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["chats"],
    queryFn: async () => {
      const response = await axios.get<Chat[]>("/api/conversations");

      return response.data;
    },
  });

  const handleRefetchChats = () => {
    queryClient.invalidateQueries({ queryKey: ["chats"] });
  };

  const router = useRouter();

  const chats = data || [];
  const pathname = usePathname();

  const isChatActive = (chatId: string) => {
    return pathname === `/dashboard/${chatId}`;
  };

  const handleChatClick = (chatId: string) => {
    router.push(`/dashboard/${chatId}`);
  };

  return (
    <Listbox aria-label="Recent chats" variant="flat">
      <ListboxSection
        classNames={{
          base: "py-0",
          heading: "py-0 pl-[10px] text-small y text-default-400",
        }}
        title="All Chats"
      >
        {chats.map((chat) => {
          return (
            <ListboxItem
              key={chat.id}
              className={`group h-[44px] px-[12px] py-[10px] text-default-500 cursor-pointer ${
                isChatActive(chat.id) ? "bg-default-100" : ""
              }`}
              endContent={
                <RecentPromptDropdown
                  id={chat.id}
                  onDelete={handleRefetchChats}
                />
              }
              onClick={() => handleChatClick(chat.id)}
            >
              {chat.title}
            </ListboxItem>
          );
        })}
      </ListboxSection>
    </Listbox>
  );
}
