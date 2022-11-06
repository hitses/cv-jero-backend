import nodemailer from 'nodemailer'

import * as mailContent from '../templates/contentMails.template.js'

export async function templateMail(type, body) {
  // TODO: borrar el registro de hora de la petición post
  console.log(
    `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
  )
  const TYPE = {
    contact: {
      subject:
        body.language === 'es'
          ? `Contacto a Jerónimo Gascón - ${body.subject}`
          : `Contact to Jerónimo Gascón - ${body.subject}`,
      content: await mailContent.contact(
        body.username,
        body.content,
        body.language
      )
    },
    default: 'Content not found'
  }

  await nodeMailer(body.email, TYPE[type].subject, TYPE[type].content)
}

async function nodeMailer(email, subject, content) {
  const TRANSPORTER = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    auth: {
      user: process.env.AUTH_USER,
      pass: process.env.AUTH_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  })

  const info = await TRANSPORTER.sendMail({
    from: `'Jerónimo Gascón' <${process.env.MAIL}>`,
    to: email,
    subject: subject,
    html: content
  })
}
