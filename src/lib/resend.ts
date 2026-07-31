import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
  throw new Error("RESEND_API_KEY is missing.");
}

export const resend = new Resend(apiKey);

interface SendEmailProps {
  to: string | string[];
  subject: string;
  html?: string;
  text?: string;
}

export async function sendEmail({
  to,
  subject,
  html,
  text,
}: SendEmailProps) {
  return await resend.emails.send({
    from:
      process.env.NGO_SENDER_EMAIL ||
      "Parakletus <onboarding@resend.dev>",
    to,
    subject,
    html: html || "",
    text: text || "",
  });
}