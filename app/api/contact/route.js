import nodemailer from 'nodemailer';

export async function POST(request) {
    const { name, email, phone, message } = await request.json();

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: process.env.SMTP_PORT || 587,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: `"Jonadest Home" <${process.env.SMTP_USER}>`,
            to: process.env.RECIPIENT_EMAIL || 'info@jonadesthome.com',
            subject: `New inquiry from ${name}`,
            html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error('Email error:', error);
        return new Response(JSON.stringify({ error: 'Failed to send' }), {
            status: 500,
        });
    }
}
