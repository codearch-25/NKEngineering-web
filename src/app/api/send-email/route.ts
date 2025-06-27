import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Create a nodemailer transporter
const transporter = nodemailer.createTransport({
	host: process.env.EMAIL_SERVER_HOST,
	port: Number(process.env.EMAIL_SERVER_PORT) || 587,
	secure: false, // Use explicit false instead of Boolean conversion
	auth: {
		user: process.env.EMAIL_SERVER_USER,
		pass: process.env.EMAIL_SERVER_PASSWORD,
	},
	tls: {
		rejectUnauthorized: true,
		minVersion: "TLSv1.2",
	},
});

export async function POST(req: NextRequest) {
	try {
		const { name, email, subject, message } = await req.json();

		// Validate the required fields
		if (!name || !email || !message) {
			return NextResponse.json(
				{ error: "Name, email and message are required" },
				{ status: 400 },
			);
		}

		// Send the email
		const data = await transporter.sendMail({
			from: process.env.EMAIL_FROM || "your-email@example.com",
			to: process.env.RECIPIENT_EMAIL || "recipient@yourdomain.com",
			subject: subject || `New contact form submission from ${name}`,
			text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
			// You can also use HTML
			html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
		});

		return NextResponse.json(
			{ success: true, messageId: data.messageId },
			{ status: 200 },
		);
	} catch (error) {
		console.error("Error sending email:", error);
		return NextResponse.json(
			{
				error: "Error sending email",
				details: error instanceof Error ? error.message : String(error),
			},
			{ status: 500 },
		);
	}
}
