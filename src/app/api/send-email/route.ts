// src/app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      // IMPORTANT: with Gmail SMTP, "from" should usually be YOUR gmail account
      // otherwise it can fail DMARC/SPF or get rewritten.
      from: `Website Contact <${process.env.EMAIL_USER}>`,

      // This makes "Reply" go to the user's email (what you actually want)
      replyTo: email,

      to: process.env.RECEIVER_EMAIL,
      subject: `New message from ${name}`,

      // ✅ include email + name in the body
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,

      // optional but nice: html version
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${String(message).replace(/\n/g, '<br/>')}</p>
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (err) {
    console.error('Error sending email:', err);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
}
