import * as mailLogic from '../logic/mail.logic.js'

export const contact = async (req, res) => {
  const contact = await mailLogic.contact(req.body)
  return res.status(contact.status).send(contact)
}
