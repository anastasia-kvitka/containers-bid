import link from "next/link";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: "ivan@warptechnologies.tech",
      to: process.env.NOTIFY_EMAIL!,
      subject: "New Bid13AIBot Submission",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5;">
          <h2>New Form Submission</h2>
          <p><strong>Email:</strong> ${email}</p>
          ${
            link
              ? `<p><strong>Auction Link:</strong> <a href="${link}">${link}</a></p>`
              : `<p><em>No auction link provided</em></p>`
          }
          <hr />
          <p style="font-size: 12px; color: #777;">Sent automatically from your website form.</p>
        </div>
      `,
    });

    // Optional: send confirmation to user
    await resend.emails.send({
        from: "ivan@warptechnologies.tech",
        to: email,
        subject: "Welcome to Bid13AIBot 👋",
        html: `
          <h2>Thanks for connecting with Bid13AIBot!</h2>
          <p>We'll get in touch soon to help you.</p>
        `,
      });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error }, { status: 500 });
    }

    console.log("Resend result:", data);
    return NextResponse.json({ success: true });
  
}
