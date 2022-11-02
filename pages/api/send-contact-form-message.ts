import type { NextApiRequest, NextApiResponse } from 'next';
import { format, utcToZonedTime } from 'date-fns-tz';
import { ContactForm } from '../../interfaces';
import { createIdNumber } from '../../utils/misc';
import { generateContactFormEmail } from '../../utils/forms/contact';
import { sendEmail } from '../../utils/mailgun';

interface Request extends NextApiRequest {
  body: ContactForm;
}

export default async function handler(req: Request, res: NextApiResponse) {
  if (!process.env.FORM_TO_EMAIL) {
    throw new Error('process.env.FORM_TO_EMAIL is required');
  }

  const now = new Date();
  const timezone = 'America/Chicago';
  const zonedDate = utcToZonedTime(now, timezone);
  const timestamp = format(zonedDate, "MM/dd/yyyy 'at' h:mmaaa");

  const message = {
    id: createIdNumber(),
    name: req.body.name.trim(),
    email: req.body.email.toLowerCase().trim(),
    phone: req.body.phone.trim(),
    message: req.body.message.trim(),
    timestamp,
  };

  const { text, html } = generateContactFormEmail(message);

  await sendEmail({
    to: `<${process.env.FORM_TO_EMAIL}>`,
    from: `Globall Giving Contact Form <support@globallgiving.org>`,
    subject: `Contact form message [#${message.id}]`,
    replyTo: req.body.email,
    text,
    html,
  });

  res.status(200).json({ success: true });
}
