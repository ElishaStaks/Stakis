/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */

import type { MailDataRequired } from '@sendgrid/mail';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY || '');

export interface EmailData {
  name: string;
  email: string;
  mobile: string;
  message: string;
}

const sendEmail = async (data: EmailData): Promise<void> => {
  // Ensure that required environment variables are defined
  if (
    !process.env.NEXT_PUBLIC_EMAIL ||
    !process.env.NEXT_PUBLIC_SENDGRID_TEMPLATE_ID
  ) {
    console.error('Missing required environment variables.');
    throw new Error('Email sending failed');
  }

  const msg: MailDataRequired = {
    to: process.env.NEXT_PUBLIC_EMAIL,
    from: process.env.NEXT_PUBLIC_EMAIL,
    templateId: process.env.NEXT_PUBLIC_SENDGRID_TEMPLATE_ID,
    dynamicTemplateData: data,
  };

  try {
    await sgMail.send(msg);
    console.log(`Email sent to: ${process.env.NEXT_PUBLIC_EMAIL}`);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Email sending failed');
  }
};

export { sendEmail };
