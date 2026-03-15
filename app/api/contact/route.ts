export const dynamic = 'force-dynamic'

import { validateContactForm, sanitizeInput } from '@/lib/sanitize'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const sanitizedData = {
      name: sanitizeInput(body.name || ''),
      email: sanitizeInput(body.email || ''),
      message: sanitizeInput(body.message || ''),
    }

    const { valid, errors } = validateContactForm(sanitizedData)

    if (!valid) {
      return Response.json(
        { error: 'Validation failed', details: errors },
        { status: 400 }
      )
    }

    // If Resend API key is configured, send email
    if (process.env.RESEND_API_KEY) {
      try {
        const contactEmail = process.env.CONTACT_EMAIL || 'karansinghsisodia@gmail.com'

        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'AsyncOwl Portfolio <onboarding@resend.dev>',
            to: contactEmail,
            subject: `[AsyncOwl] New message from ${sanitizedData.name}`,
            text: [
              `Name: ${sanitizedData.name}`,
              `Email: ${sanitizedData.email}`,
              `Message:`,
              sanitizedData.message,
            ].join('\n'),
          }),
        })
      } catch (emailError) {
        console.error('Email sending failed:', emailError)
      }
    }

    console.log('Contact form submission:', {
      name: sanitizedData.name,
      email: sanitizedData.email,
      messageLength: sanitizedData.message.length,
      timestamp: new Date().toISOString(),
    })

    return Response.json({
      success: true,
      message: 'Message delivered. Response ETA: 24-48h',
    })
  } catch (error) {
    console.error('Contact API error:', error)
    return Response.json(
      { error: 'Failed to process your message. Please try again.' },
      { status: 500 }
    )
  }
}
