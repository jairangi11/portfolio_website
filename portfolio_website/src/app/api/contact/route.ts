import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Define the expected structure of the request body
interface RequestBody {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    // Parse the JSON body from the request
    const body = await request.json() as RequestBody;
    const { name, email, subject, message } = body;

    // Basic validation (can be expanded)
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
     if (!process.env.RESEND_API_KEY) {
        console.error('RESEND_API_KEY is not set in environment variables.');
        return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

     if (!process.env.CONTACT_FORM_RECEIVER_EMAIL) {
        console.error('CONTACT_FORM_RECEIVER_EMAIL is not set in environment variables.');
        return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }


    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: `Portfolio Website Contact Form <onboarding@resend.dev>`, // Use a verified domain or onboarding@resend.dev for testing
      to: [process.env.CONTACT_FORM_RECEIVER_EMAIL], // Your receiving email address from env var
      subject: `Portfolio Website Contact Form Submission: ${subject}`,
      replyTo: email, // CORRECTED: Changed reply_to to replyTo
      html: `
        <h1>Portfolio Website Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      // You can also use the `react` property for more complex templates:
      // react: EmailTemplate({ firstName: name, ... }), 
    });

    // Handle potential errors from Resend
    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ error: 'Failed to send message', details: error.message }, { status: 500 });
    }

    // Return a success response
    return NextResponse.json({ message: 'Message sent successfully!', data }, { status: 200 });

  } catch (err) {
    // Handle unexpected errors during processing
    console.error("API Route Error:", err);
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
    return NextResponse.json({ error: 'Internal Server Error', details: errorMessage }, { status: 500 });
  }
} 