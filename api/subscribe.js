import crypto from 'node:crypto';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' });
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

  if (!API_KEY || !AUDIENCE_ID) {
    console.error('Missing Mailchimp environment variables');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  const SERVER = API_KEY.split('-')[1]; // e.g. 'us4'
  const auth = Buffer.from(`anystring:${API_KEY}`).toString('base64');
  const hash = crypto.createHash('md5').update(email.toLowerCase()).digest('hex');
  const baseUrl = `https://${SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}`;
  const headers = {
    Authorization: `Basic ${auth}`,
    'Content-Type': 'application/json',
  };

  try {
    // Upsert the subscriber (handles both new and existing members)
    const memberRes = await fetch(`${baseUrl}/members/${hash}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify({
        email_address: email,
        status_if_new: 'subscribed',
        status: 'subscribed',
      }),
    });

    if (!memberRes.ok) {
      const err = await memberRes.json();
      console.error('Mailchimp member error:', err);
      return res.status(400).json({ error: 'Could not subscribe. Please try again.' });
    }

    // Apply the PainFreeTendon tag
    await fetch(`${baseUrl}/members/${hash}/tags`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        tags: [{ name: 'PainFreeTendon', status: 'active' }],
      }),
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Subscribe error:', err);
    return res.status(500).json({ error: 'Server error. Please try again.' });
  }
}
