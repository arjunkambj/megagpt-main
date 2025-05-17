"use client";

import { Icon } from "@iconify/react";
import React, { useCallback, useState } from "react";
import { Badge } from "@heroui/badge";
import { Button } from "@heroui/button";
import { cn } from "@heroui/theme";
import { Form } from "@heroui/form";
import { Image } from "@heroui/image";
import { Tooltip } from "@heroui/tooltip";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { addToast } from "@heroui/toast";

import PromptInput from "./prompt-input";

interface PromptInputProps {
  prompt: string;
  setInput: (value: string) => void;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  chatId: string;
  isLoading?: boolean;
}

interface PromptInputAssetsProps {
  assets: string[];
  onRemoveAsset: (index: number) => void;
}

const PromptInputAssets = ({
  assets,
  onRemoveAsset,
}: PromptInputAssetsProps) => {
  if (assets.length === 0) return null;

  return (
    <>
      {assets.map((asset, index) => (
        <Badge
          key={index}
          isOneChar
          className="opacity-0 group-hover:opacity-100"
          content={
            <Button
              isIconOnly
              radius="full"
              size="sm"
              variant="light"
              onPress={() => onRemoveAsset(index)}
            >
              <Icon
                className="text-foreground"
                icon="iconamoon:close-thin"
                width={16}
              />
            </Button>
          }
        >
          <Image
            alt="uploaded image"
            className="h-14 w-14 rounded-small border-small border-default-200/50 object-cover"
            src={asset}
          />
        </Badge>
      ))}
    </>
  );
};

export function PromptInputFullLineComponent({
  prompt,
  handleInputChange,
  handleSubmit,
  isLoading,
}: PromptInputProps) {
  const [assets, setAssets] = useState<string[]>([]);

  const inputRef = React.useRef<HTMLTextAreaElement>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();

        handleSubmit();
      }
    },
    [handleSubmit],
  );

  const handlePaste = useCallback(async (e: React.ClipboardEvent) => {
    const items = Array.from(e.clipboardData.items);

    for (const item of items) {
      if (item.type.indexOf("image") !== -1) {
        const blob = item.getAsFile();

        if (!blob) continue;

        const reader = new FileReader();

        reader.onload = () => {
          const base64data = reader.result as string;

          setAssets((prev) => [...prev, base64data]);
        };
        reader.readAsDataURL(blob);
      }
    }
  }, []);

  // const handleFileUpload = useCallback(
  //   (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const files = Array.from(e.target.files || []);

  //     files.forEach((file) => {
  //       if (file.type.startsWith("image/")) {
  //         const reader = new FileReader();

  //         reader.onload = () => {
  //           const base64data = reader.result as string;

  //           setAssets((prev) => [...prev, base64data]);
  //         };
  //         reader.readAsDataURL(file);
  //       }
  //     });

  //     // Reset input value to allow uploading the same file again
  //     if (fileInputRef.current) {
  //       fileInputRef.current.value = "";
  //     }
  //   },
  //   []
  // );

  return (
    <Form
      className="flex w-full shadow-none flex-col items-start gap-0 rounded-medium bg-default-100 dark:bg-default-100"
      validationBehavior="native"
      onSubmit={handleSubmit}
    >
      <div
        className={cn(
          "group flex gap-2 pl-[20px] pr-3",
          assets.length > 0 ? "pt-4" : "",
        )}
      >
        <PromptInputAssets
          assets={assets}
          onRemoveAsset={(index) => {
            setAssets((prev) => prev.filter((_, i) => i !== index));
          }}
        />
      </div>
      <PromptInput
        ref={inputRef}
        classNames={{
          innerWrapper: "relative",
          input: "text-medium h-auto w-full",
          inputWrapper:
            "!bg-transparent shadow-none group-data-[focus-visible=true]:ring-0 group-data-[focus-visible=true]:ring-offset-0 pr-3 pl-[20px] pt-3 pb-4",
        }}
        disabled={isLoading}
        maxRows={16}
        minRows={2}
        name="content"
        radius="lg"
        spellCheck="false"
        value={prompt}
        variant="flat"
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
      />
      <div className="flex w-full flex-row items-center justify-between px-3 pb-3">
        <Tooltip showArrow content="Attach Files">
          <Button
            isIconOnly
            isDisabled={isLoading}
            radius="full"
            size="sm"
            variant="light"
            onPress={() => {
              addToast({
                title: "it's not working",
                description: "we are working on it",
                variant: "solid",
              });
            }}
          >
            <Icon
              className="text-default-500"
              icon="solar:paperclip-outline"
              width={24}
            />
            <VisuallyHidden>
              <input ref={fileInputRef} multiple accept="image/*" type="file" />
            </VisuallyHidden>
          </Button>
        </Tooltip>
        <Button
          isIconOnly
          color={!prompt || isLoading ? "default" : "primary"}
          isDisabled={!prompt || isLoading}
          radius="full"
          size="sm"
          type="submit"
          variant="solid"
        >
          <Icon
            className={cn(
              "[&>path]:stroke-[2px]",
              !prompt ? "text-default-600" : "text-primary-foreground",
            )}
            icon="solar:arrow-up-linear"
            width={20}
          />
        </Button>
      </div>
    </Form>
  );
}
