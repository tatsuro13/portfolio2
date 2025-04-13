import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, service, message } = body;

    // バリデーション
    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: "必須項目が入力されていません" },
        { status: 400 },
      );
    }

    // 環境変数の確認
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      console.error("環境変数が設定されていません:", { emailUser, emailPass });
      return NextResponse.json(
        { error: "メールサーバーの設定が不完全です" },
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
      subject: `ポートフォリオサイトからのお問い合わせ: ${service || "未選択"}`,
      text: `
名前: ${firstName} ${lastName || ""}
メールアドレス: ${email}
電話番号: ${phone || "未入力"}
サービス: ${service || "未選択"}
メッセージ:
${message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #333;">ポートフォリオサイトからのお問い合わせ</h2>
  <p><strong>サービス:</strong> ${service || "未選択"}</p>
  <p><strong>名前:</strong> ${firstName} ${lastName || ""}</p>
  <p><strong>メールアドレス:</strong> ${email}</p>
  <p><strong>電話番号:</strong> ${phone || "未入力"}</p>
  <h3 style="margin-top: 20px;">メッセージ:</h3>
  <p style="white-space: pre-line;">${message}</p>
</div>
      `,
    };

    // メール送信
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("メール送信成功:", info.messageId);
      return NextResponse.json({ success: true, messageId: info.messageId });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (sendError: any) {
      console.error("メール送信中のエラー:", sendError);
      return NextResponse.json(
        {
          error: `メール送信に失敗しました: ${sendError.message || JSON.stringify(sendError)}`,
        },
        { status: 500 },
      );
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("APIエラー:", error);
    return NextResponse.json(
      {
        error: `メール送信に失敗しました: ${error.message || JSON.stringify(error)}`,
      },
      { status: 500 },
    );
  }
}
