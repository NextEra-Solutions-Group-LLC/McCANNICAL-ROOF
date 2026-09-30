import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY || process.env.RSEND_API_KEY;
    const receiverMail = process.env.RECEIVER_MAIL || "arnobroyjoy1@gmail.com";

    if (!apiKey) {
      return NextResponse.json(
        { error: "Resend API key is not configured in environment variables." },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { name, email, phone, service, msg, message } = body;
    const userMsg = msg || message || "";

    if (!name || !email || !phone || !userMsg) {
      return NextResponse.json(
        { error: "Please fill in all required fields (name, email, phone, message)." },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);
    const subject = `${name} Contacted in mccannicalroofing.com website`;
    const serviceName = service || "General Inquiry";

    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #ffffff; color: #000000; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #ffffff; border: 1px solid #000000; padding: 32px; border-radius: 8px;">
          <!-- Top Logo -->
          <tr>
            <td align="center" style="padding-bottom: 24px; border-bottom: 1px solid #000000;">
              <img src="https://mccannicalroofing.com/company-logo.png" alt="McCannical Roofing Logo" width="180" style="display: block; width: 180px; max-width: 100%; height: auto;" />
            </td>
          </tr>
          
          <!-- Heading -->
          <tr>
            <td style="padding-top: 24px; padding-bottom: 16px;">
              <h2 style="margin: 0; font-size: 20px; font-weight: 800; color: #000000; text-transform: uppercase; letter-spacing: 0.5px; text-align: center;">
                New Contact Form Submission
              </h2>
            </td>
          </tr>
          
          <!-- Information Table -->
          <tr>
            <td>
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="width: 100%; font-size: 15px; color: #000000;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #000000; font-weight: 700; width: 150px; color: #000000;">Name:</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #000000; color: #000000;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #000000; font-weight: 700; color: #000000;">Email Address:</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #000000; color: #000000;"><a href="mailto:${email}" style="color: #000000; text-decoration: underline;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #000000; font-weight: 700; color: #000000;">Phone Number:</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #000000; color: #000000;"><a href="tel:${phone}" style="color: #000000; text-decoration: underline;">${phone}</a></td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #000000; font-weight: 700; color: #000000;">Service Required:</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #000000; color: #000000;">${serviceName}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; font-weight: 700; vertical-align: top; color: #000000;">Message:</td>
                  <td style="padding: 12px 0; color: #000000; white-space: pre-wrap; line-height: 1.5;">${userMsg}</td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding-top: 24px; font-size: 12px; color: #000000; border-top: 1px solid #000000; margin-top: 24px; text-align: center;">
              This notification was sent automatically from mccannicalroofing.com
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

    const data = await resend.emails.send({
      from: "McCannical Roofing <mccannicalroofing@erasync.us>",
      to: [receiverMail],
      replyTo: email,
      subject: subject,
      html: html,
    });

    if (data.error) {
      return NextResponse.json({ error: data.error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, id: data.data?.id });
  } catch (error: any) {
    console.error("Error sending contact email:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to send email." },
      { status: 500 }
    );
  }
}
