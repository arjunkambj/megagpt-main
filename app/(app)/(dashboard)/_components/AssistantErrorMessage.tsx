import React from "react";

import MessageCard from "./sub/error-message-card";

export default function Component() {
  return (
    <MessageCard
      showFeedback
      avatar="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatar_ai.png"
      status="failed"
    />
  );
}
