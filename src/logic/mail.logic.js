import { templateMail } from '../libs/templateMail.js'

export async function contact(body) {
  try {
    await templateMail('contact', body)

    return { status: 200, data: { mess: 'Mail sended correctly.' } }
  } catch (err) {
    console.log(err)
    return {
      status: 500,
      data: { mess: 'Something went wrong. Please try again later.' }
    }
  }
}
