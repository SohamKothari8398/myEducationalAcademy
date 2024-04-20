import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { name, schoolName, age, mobileNumber, email, address, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.CONTACT_EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: email,
    to: process.env.CONTACT_EMAIL,
    subject: `Inquiry Message from ${name}`,
    html: `
        <div>I am <strong>${name}</strong> from <strong>${address}</strong> I am <strong>${age}</strong> years old. <br/> <br/> Awaiting your response.</div>
        <br/>
        <table style="border-collapse: collapse;">
        <tbody>
          <tr>
            <th style="border: 4px solid #171e81; padding: 8px; font-weight: bold;">Name:</th>
            <td style="border: 4px solid #171e81; padding: 8px;">${name}</td>
          </tr>
          <tr>
            <th style="border: 4px solid #171e81; padding: 8px; font-weight: bold;">School Name:</th>
            <td style="border: 4px solid #171e81; padding: 8px;">${schoolName}</td>
          </tr>
          <tr>
            <th style="border: 4px solid #171e81; padding: 8px; font-weight: bold;">Age:</th>
            <td style="border: 4px solid #171e81; padding: 8px;">${age}</td>
          </tr>
          <tr>
            <th style="border: 4px solid #171e81; padding: 8px; font-weight: bold;">Mobile Number:</th>
            <td style="border: 4px solid #171e81; padding: 8px;">${mobileNumber}</td>
          </tr>
          <tr>
            <th style="border: 4px solid #171e81; padding: 8px; font-weight: bold;">Email:</th>
            <td style="border: 4px solid #171e81; padding: 8px;">${email}</td>
          </tr>
          <tr>
            <th style="border: 4px solid #171e81; padding: 8px; font-weight: bold;">Address:</th>
            <td style="border: 4px solid #171e81; padding: 8px;">${address}</td>
          </tr>
        </tbody>
      </table>
      <br/>
      <p style="font-weight: bold;">Message:</p>
      <p>${message}</p>
      Thanks & Regards,
      <br/>
      ${name}
      `,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}