/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import type { EmailData } from './mailer';
import { sendEmail } from './mailer';

async function streamToString(stream: any) {
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString('utf8');
}

function isValidEmailData(data: EmailData): data is EmailData {
  if (!data || typeof data !== 'object') {
    return false;
  }

  const { name, email, mobile, message } = data;

  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof mobile !== 'string' ||
    typeof message !== 'string'
  ) {
    return false;
  }

  // Additional validation rules can be added as needed

  return true;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const bodyText = await streamToString(req.body);
  const data = JSON.parse(bodyText) as EmailData;

  if (!isValidEmailData(data)) {
    // Handle the case where req.body is null
    console.error('Invalid or missing request body.');
    return NextResponse.json(
      { message: 'Invalid request body' },
      { status: 400 },
    );
  }

  try {
    await sendEmail(data);
    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Email sending failed' },
      { status: 500 },
    );
  }
}
