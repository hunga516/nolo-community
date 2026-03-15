"use client";

import { useState } from "react";
import { Chatbot } from "./chatbot";
import { ChatbotToggle } from "./chatbot-toggle";

export function ChatbotProvider() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Chatbot isOpen={isOpen} />
      <ChatbotToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
    </>
  );
}
