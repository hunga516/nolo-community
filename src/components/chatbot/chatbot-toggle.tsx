"use client";

import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ChatbotToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

export function ChatbotToggle({ isOpen, onClick }: ChatbotToggleProps) {
  return (
    <Button
      onClick={onClick}
      size="icon"
      className={cn(
        "fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110",
        isOpen
          ? "bg-destructive hover:bg-destructive/90"
          : "bg-primary hover:bg-primary/90"
      )}
    >
      {isOpen ? (
        <X className="h-6 w-6" />
      ) : (
        <MessageCircle className="h-6 w-6" />
      )}
    </Button>
  );
}
