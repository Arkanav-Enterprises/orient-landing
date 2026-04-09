import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false, // STARTTLS upgrades on connect
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, interest, message } = body;

    if (!name || !email || !interest) {
      return NextResponse.json(
        { error: "Name, email, and interest are required." },
        { status: 400 }
      );
    }

    const lines = [
      `Name: ${name}`,
      company && `Company: ${company}`,
      `Email: ${email}`,
      phone && `Phone: ${phone}`,
      `Interest: ${interest}`,
      message && `\nMessage:\n${message}`,
    ]
      .filter(Boolean)
      .join("\n");

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER, // delivers to same inbox
      replyTo: email,
      subject: `Website Enquiry: ${interest} — ${name}`,
      text: lines,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
