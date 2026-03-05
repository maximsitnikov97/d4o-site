import { NextResponse } from "next/server";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID!;

export async function POST(req: Request) {
  try {
    const { name, contact, message } = await req.json();

    if (!name?.trim() || !contact?.trim()) {
      return NextResponse.json(
        { error: "Имя и контакт обязательны" },
        { status: 400 },
      );
    }

    const text = [
      `<b>Новая заявка с сайта d4o.tech</b>`,
      ``,
      `<b>Имя:</b> ${escapeHtml(name)}`,
      `<b>Контакт:</b> ${escapeHtml(contact)}`,
      message?.trim() ? `<b>Сообщение:</b> ${escapeHtml(message)}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const res = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          parse_mode: "HTML",
        }),
      },
    );

    if (!res.ok) {
      console.error("Telegram API error:", await res.text());
      return NextResponse.json(
        { error: "Ошибка отправки" },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Ошибка сервера" },
      { status: 500 },
    );
  }
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
