import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, link } = body;

    // Basic validation
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // In development just log (replace with DB/email integration)
    console.log("New subscribe:", { email, link, time: new Date().toISOString() });

    // TODO: save to DB, call external mailing service, etc.

    return NextResponse.json({ success: true, message: "Thanks!" });
  } catch (err) {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
