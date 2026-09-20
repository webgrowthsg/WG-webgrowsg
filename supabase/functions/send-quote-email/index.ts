import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const RECIPIENT_EMAIL = "happyfather1980@gmail.com";
const MAX_ATTACHMENT_BYTES = 5 * 1024 * 1024;
const ALLOWED_MIME = ["application/pdf", "image/jpeg", "image/png"];

type QuotePayload = {
  name: string;
  company: string;
  phone: string;
  email: string;
  location: string;
  officeSize: string;
  services: string[];
  startDate: string;
  requirements: string;
};

type AttachmentPayload = {
  filename: string;
  mimeType: string;
  contentBase64: string;
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmailHtml(data: QuotePayload): string {
  const rows = [
    ["Name", data.name],
    ["Company", data.company],
    ["Phone", data.phone],
    ["Email", data.email],
    ["Project Location", data.location],
    ["Approximate Office Size", data.officeSize || "Not specified"],
    ["Service Types", data.services.join(", ") || "None selected"],
    ["Estimated Start Date", data.startDate],
    ["Additional Requirements", data.requirements || "None"],
  ];

  const rowsHtml = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;font-weight:600;background:#f8fafc;border:1px solid #e2e8f0;width:200px;">${escapeHtml(
          label
        )}</td><td style="padding:8px 12px;border:1px solid #e2e8f0;">${escapeHtml(
          value
        )}</td></tr>`
    )
    .join("");

  return `<!DOCTYPE html>
<html>
<body style="font-family:Arial,Helvetica,sans-serif;color:#1e293b;max-width:600px;margin:0 auto;">
  <h2 style="color:#003D66;">New Quotation Request</h2>
  <p>A new quotation request was submitted from your website contact form.</p>
  <table style="border-collapse:collapse;width:100%;font-size:14px;">${rowsHtml}</table>
  <p style="margin-top:16px;font-size:12px;color:#94a3b8;">Submitted via officepartitionsg.com contact form</p>
</body>
</html>`;
}

function buildEmailText(data: QuotePayload): string {
  return [
    "New Quotation Request",
    "==================",
    "",
    `Name: ${data.name}`,
    `Company: ${data.company}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `Project Location: ${data.location}`,
    `Approximate Office Size: ${data.officeSize || "Not specified"}`,
    `Service Types: ${data.services.join(", ") || "None selected"}`,
    `Estimated Start Date: ${data.startDate}`,
    `Additional Requirements: ${data.requirements || "None"}`,
  ].join("\n");
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const body = await req.json();
    const data: QuotePayload = {
      name: String(body.name || "").trim(),
      company: String(body.company || "").trim(),
      phone: String(body.phone || "").trim(),
      email: String(body.email || "").trim(),
      location: String(body.location || "").trim(),
      officeSize: String(body.officeSize || "").trim(),
      services: Array.isArray(body.services)
        ? body.services.map((s: unknown) => String(s)).filter(Boolean)
        : [],
      startDate: String(body.startDate || "").trim(),
      requirements: String(body.requirements || "").trim(),
    };

    if (
      data.name.length < 2 ||
      data.company.length < 1 ||
      !data.phone ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) ||
      data.location.length < 5 ||
      data.services.length === 0 ||
      !data.startDate
    ) {
      return new Response(JSON.stringify({ error: "Invalid form data" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (data.requirements.length > 500) {
      return new Response(
        JSON.stringify({ error: "Requirements too long" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const attachment: AttachmentPayload | null = body.attachment
      ? {
          filename: String(body.attachment.filename || "floor-plan").slice(0, 255),
          mimeType: String(body.attachment.mimeType || "application/octet-stream"),
          contentBase64: String(body.attachment.contentBase64 || ""),
        }
      : null;

    if (attachment) {
      if (!ALLOWED_MIME.includes(attachment.mimeType)) {
        return new Response(
          JSON.stringify({ error: "Unsupported file type" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const byteLength = Math.floor((attachment.contentBase64.length * 3) / 4);
      if (byteLength > MAX_ATTACHMENT_BYTES) {
        return new Response(
          JSON.stringify({ error: "File too large" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return new Response(
        JSON.stringify({ error: "Email service is not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const emailPayload: Record<string, unknown> = {
      from: "Office Partition SG <onboarding@resend.dev>",
      to: RECIPIENT_EMAIL,
      reply_to: data.email,
      subject: `New Quotation Request — ${data.company}`,
      html: buildEmailHtml(data),
      text: buildEmailText(data),
    };

    if (attachment) {
      emailPayload.attachments = [
        {
          filename: attachment.filename,
          content: attachment.contentBase64,
          content_type: attachment.mimeType,
          encoding: "base64",
        },
      ];
    }

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailPayload),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.error("Resend API error:", resendResponse.status, errorText);
      return new Response(
        JSON.stringify({ error: "Failed to send email" }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("send-quote-email error:", err);
    return new Response(
      JSON.stringify({ error: "Something went wrong" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
