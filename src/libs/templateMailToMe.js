import nodemailer from 'nodemailer'

import * as mailContent from '../templates/contentMails.template.js'

export async function templateMailToMe(type, body) {
  const search = '\n'
  const replaceWith = '<br />'
  const message = body.message.split(search).join(replaceWith)

  const TYPE = {
    contact: {
      subject: `Contacto de ${body.name} desde www.jerogassan.dev`,
      content: await mailContent.contactToMe(body.name, message, body.email)
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
    from: `'Jerónimo Gascón' <${process.env.AUTH_USER}>`,
    to: process.env.AUTH_USER,
    subject: subject,
    html: content
  })
}
