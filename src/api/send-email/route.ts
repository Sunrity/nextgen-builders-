import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Setup mail transporter (use your Gmail or custom SMTP)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER, // your email address
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS, // your email password or app password
      },
    });

    // Email details
    const mailOptions = {
      from: email,
      to: "contact@nextgenbuilders.org", // CEO or customer service email
      subject: `New Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Message sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Failed to send message." }),
      { status: 500 }
    );
  }
}
