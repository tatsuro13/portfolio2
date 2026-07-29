import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, service, message } = body;

    // バリデーション
    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    // 環境変数の確認
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      console.error("Email server configuration is incomplete.");
      return NextResponse.json(
        { error: "The email service is temporarily unavailable." },
        { status: 500 },
      );
    }

    // Gmailのトランスポーター設定
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: emailUser,
        pass: emailPass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // メール内容
    const mailOptions = {
      from: emailUser,
      to: emailUser,
      subject: `Portfolio inquiry: ${service || "Not selected"}`,
      text: `
Name: ${firstName} ${lastName || ""}
Email: ${email}
Phone: ${phone || "Not provided"}
Service: ${service || "Not selected"}
Message:
${message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #333;">Portfolio inquiry</h2>
  <p><strong>Service:</strong> ${service || "Not selected"}</p>
  <p><strong>Name:</strong> ${firstName} ${lastName || ""}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
  <h3 style="margin-top: 20px;">Message:</h3>
  <p style="white-space: pre-line;">${message}</p>
</div>
      `,
    };

    // メール送信
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent:", info.messageId);
      return NextResponse.json({ success: true, messageId: info.messageId });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (sendError: any) {
      console.error("Email delivery error:", sendError);
      return NextResponse.json(
        {
          error: `Your message could not be sent: ${sendError.message || JSON.stringify(sendError)}`,
        },
        { status: 500 },
      );
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        error: `Your message could not be sent: ${error.message || JSON.stringify(error)}`,
      },
      { status: 500 },
    );
  }
}
