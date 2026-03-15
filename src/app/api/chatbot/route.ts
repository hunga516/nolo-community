import { NextRequest, NextResponse } from "next/server";

const CHATBOT_API_URL = process.env.CHATBOT_API_URL || "https://transudatory-hatchable-elanor.ngrok-free.dev/api/chat/roleplay";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, question } = body;

    const userMessage = message || question;

    if (!userMessage || typeof userMessage !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const response = await fetch(CHATBOT_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: userMessage,
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();

    if (data.success && data.data && data.data.answer) {
      return NextResponse.json({
        reply: data.data.answer,
      });
    } else {
      throw new Error("Invalid API response format");
    }
  } catch (error) {
    console.error("Chatbot error:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        reply: "Xin lỗi, có lỗi xảy ra khi xử lý yêu cầu của bạn. Vui lòng thử lại sau."
      },
      { status: 500 }
    );
  }
}
