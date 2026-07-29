import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allowedServices = new Set([
  "Product Engineering",
  "Applied AI & Automation",
  "Technical Review & Advisory",
  "Other",
]);

const requestCounts = new Map<
  string,
  {
    count: number;
    resetAt: number;
  }
>();

type ContactPayload = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
  website: string;
};

const isRecord = (value: unknown): value is Record<string, unknown> => {
  return typeof value === "object" && value !== null;
};

const readString = (value: Record<string, unknown>, key: string): string => {
  const field = value[key];
  return typeof field === "string" ? field.trim() : "";
};

const parseContactPayload = (value: unknown): ContactPayload | null => {
  if (!isRecord(value)) {
    return null;
  }

  const payload = {
    name: readString(value, "name"),
    email: readString(value, "email"),
    company: readString(value, "company"),
    service: readString(value, "service"),
    message: readString(value, "message"),
    website: readString(value, "website"),
  };

  if (
    !payload.name ||
    payload.name.length > 100 ||
    !payload.email ||
    payload.email.length > 254 ||
    !EMAIL_PATTERN.test(payload.email) ||
    payload.company.length > 120 ||
    (payload.service && !allowedServices.has(payload.service)) ||
    !payload.message ||
    payload.message.length > 5000
  ) {
    return null;
  }

  return payload;
};

const escapeHtml = (value: string): string => {
  const characters: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };

  return value.replace(/[&<>"']/g, (character) => characters[character]);
};

const getClientIp = (request: Request): string => {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
};

const isRateLimited = (key: string): boolean => {
  const now = Date.now();

  for (const [storedKey, value] of requestCounts) {
    if (value.resetAt <= now) {
      requestCounts.delete(storedKey);
    }
  }

  const current = requestCounts.get(key);

  if (!current) {
    requestCounts.set(key, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT_MAX_REQUESTS;
};

export async function POST(request: Request) {
  const clientIp = getClientIp(request);

  if (isRateLimited(clientIp)) {
    return NextResponse.json(
      { error: "Too many messages. Please try again later." },
      {
        status: 429,
        headers: {
          "Retry-After": String(RATE_LIMIT_WINDOW_MS / 1000),
        },
      },
    );
  }

  try {
    const payload = parseContactPayload(await request.json());

    if (!payload) {
      return NextResponse.json(
        { error: "Please check the form fields and try again." },
        { status: 400 },
      );
    }

    if (payload.website) {
      return NextResponse.json({ success: true });
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      console.error("Email server configuration is incomplete.");
      return NextResponse.json(
        { error: "The email service is temporarily unavailable." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const service = payload.service || "Not selected";
    const company = payload.company || "Not provided";

    await transporter.sendMail({
      from: emailUser,
      to: emailUser,
      replyTo: payload.email,
      subject: `Portfolio inquiry: ${service}`,
      text: `
Name: ${payload.name}
Email: ${payload.email}
Company: ${company}
Project type: ${service}
Message:
${payload.message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #333;">Portfolio inquiry</h2>
  <p><strong>Project type:</strong> ${escapeHtml(service)}</p>
  <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
  <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
  <p><strong>Company:</strong> ${escapeHtml(company)}</p>
  <h3 style="margin-top: 20px;">Message:</h3>
  <p style="white-space: pre-line;">${escapeHtml(payload.message)}</p>
</div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Your message could not be sent. Please try again later." },
      { status: 500 },
    );
  }
}
