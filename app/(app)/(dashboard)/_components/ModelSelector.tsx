"use client";

import { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@heroui/dropdown";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";

// Custom Badge component since Chip may not be available
function Badge({
  children,
  color = "default",
  size = "md",
}: {
  children: React.ReactNode;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  size?: "sm" | "md" | "lg";
}) {
  const colorClasses = {
    default: "bg-default-100 text-default-800",
    primary: "bg-primary-100 text-primary-800",
    secondary: "bg-secondary-100 text-secondary-800",
    success: "bg-success-100 text-success-800",
    warning: "bg-warning-100 text-warning-800",
    danger: "bg-danger-100 text-danger-800",
  };

  const sizeClasses = {
    sm: "text-xs px-1.5 py-0.5 rounded",
    md: "text-sm px-2 py-1 rounded-md",
    lg: "text-base px-2.5 py-1.5 rounded-lg",
  };

  return (
    <span
      className={`inline-flex items-center font-medium ${colorClasses[color]} ${sizeClasses[size]}`}
    >
      {children}
    </span>
  );
}

// Model types and data
interface Model {
  id: string;
  name: string;
  description: string;
  capabilities: string[];
  tokensPerMin: number;
  isNew?: boolean;
  isPro?: boolean;
}

const models: Model[] = [
  {
    id: "gpt-4.1",
    name: "GPT-4.1",
    description: "OpenAI's advanced reasoning powerhouse",
    capabilities: [
      "Complex problem-solving",
      "Tool usage",
      "Advanced reasoning",
    ],
    tokensPerMin: 15000,
    isNew: true,
    isPro: true,
  },
  {
    id: "gemini-2.5-flash",
    name: "Gemini 2.5 Flash",
    description: "Google's optimized model for quick responses",
    capabilities: [
      "Multimodal processing",
      "Fast inference",
      "Factual responses",
    ],
    tokensPerMin: 8000,
  },
  {
    id: "claude-3.7-sonnet",
    name: "Claude 3.7 Sonnet",
    description: "Anthropic's balanced model for nuanced tasks",
    capabilities: ["Longer context", "Nuanced reasoning", "Safety focus"],
    tokensPerMin: 12000,
    isPro: true,
  },
  {
    id: "gpt-4o",
    name: "GPT-4o",
    description: "OpenAI's multimodal model with enhanced speed",
    capabilities: ["Vision processing", "Fast responses", "Code generation"],
    tokensPerMin: 10000,
  },
  {
    id: "grok-3",
    name: "Grok 3",
    description: "xAI's witty model with real-time knowledge",
    capabilities: ["Current events", "Playful responses", "Technical analysis"],
    tokensPerMin: 15000,
  },
];

export default function ModelSelector() {
  const [selectedModel, setSelectedModel] = useState<Model>(models[0]);

  return (
    <div className="sticky z-50 top-0">
      <Dropdown>
        <DropdownTrigger>
          <Button
            className="w-auto justify-between"
            endContent={<Icon icon="solar:alt-arrow-down-linear" width={16} />}
            variant="flat"
          >
            <div className="flex items-center gap-2">
              <Icon icon="solar:cpu-bold" width={20} />
              <span>{selectedModel.name}</span>
            </div>
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Select AI Model"
          className="min-w-[280px]"
          variant="flat"
          onAction={(key) => {
            const model = models.find((m) => m.id === key);

            if (model) setSelectedModel(model);
          }}
        >
          <DropdownSection showDivider title="AI Models">
            {models.map((model) => (
              <DropdownItem
                key={model.id}
                className="py-2"
                description={model.description}
                endContent={
                  <div className="flex items-center gap-1">
                    {model.isNew && (
                      <Badge color="success" size="sm">
                        New
                      </Badge>
                    )}
                    {model.isPro && (
                      <Badge color="secondary" size="sm">
                        Pro
                      </Badge>
                    )}
                  </div>
                }
                startContent={
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                    <Icon
                      className="text-primary"
                      icon="solar:cpu-bold"
                      width={18}
                    />
                  </div>
                }
              >
                <div className="flex flex-col">
                  <span className="text-small font-medium">{model.name}</span>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {model.capabilities.map((capability, index) => (
                      <Badge key={index} color="default" size="sm">
                        {capability}
                      </Badge>
                    ))}
                  </div>
                </div>
              </DropdownItem>
            ))}
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
