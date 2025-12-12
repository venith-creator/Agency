import Contact from '../models/Contact.js'
import { sendMail } from '../utils/Email.js'

export const submitContact = async (req, res) => {
  try {
    const { name, email, whatsapp, message } = req.body

    if (!name || !email || !whatsapp || !message) {
      return res.status(400).json({ message: 'All required fields must be filled' })
    }

    // 1️⃣ Save to database
    const contact = await Contact.create({ name, email, whatsapp, message })

    // 2️⃣ Send confirmation email to the user
    const userHtml = `
      <h2>Thank you for contacting Service Connect</h2>
      <p>Hi ${name},</p>
      <p>We’ve received your message and our team will get back to you soon.</p>
      <p><strong>Your message:</strong></p>
      <blockquote style="border-left:3px solid #6d28d9;padding-left:10px;color:#555;">${message}</blockquote>
      <p>Warm regards,<br/>Timglobal Team</p>
    `

    await sendMail(email, 'We’ve received your message', '', userHtml)

    // 3️⃣ Send notification email to admin
    const adminHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>PhoneNo:</strong> ${whatsapp}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="border-left:3px solid #6d28d9;padding-left:10px;color:#555;">${message}</blockquote>
    `

    await sendMail(process.env.EMAIL_USER, `New Contact Message from ${name}`, '', adminHtml)

    res.status(201).json({ message: 'Message sent successfully!' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
}