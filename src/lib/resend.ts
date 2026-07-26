import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
  console.warn("Warning: RESEND_API_KEY is missing from environment variables.");
}

export const resend = new Resend(apiKey || "re_dummy_key");

/**
 * Helper function to dispatch emails via Resend
 */
export async function sendEmail({
  to,
  subject,
  html,
  text,
}: {
  to: string | string[];
  subject: string;
  html?: string;
  text?: string;
}) {
  try {
    const data = await resend.emails.send({
      from: process.env.NGO_SENDER_EMAIL || "Parakletus <onboarding@resend.dev>",
      to,
      subject,
      html,
      text,
    });
    return { success: true, data };
  } catch (error) {
    console.error("Error sending email via Resend:", error);
    return { success: false, error };
  }
}