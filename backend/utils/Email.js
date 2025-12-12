import { Resend } from 'resend'
import dotenv from 'dotenv'
dotenv.config()

// ✅ Initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY)

// ✅ Send email function
export const sendMail = async (to, subject, text, html) => {
  try {
    const response = await resend.emails.send({
      from: 'Timglobal <pmo@timglobal.uk>', // must use a verified domain or 'onboarding@resend.dev'
      to,
      subject,
      text,
      html,
    })

    console.log('✅ Email sent successfully:', response)
  } catch (error) {
    console.error('❌ Error sending email:', error)
  }
}