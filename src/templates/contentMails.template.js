export async function contact(username, content, language = 'es') {
  return language === 'es'
    ? `
  <h1>Contacto a Jero</h1>
  <p>Gracias por contactar, ${username}.</p>
  <p>Tu mensaje es el siguiente:</p>
  <p>${content}</p>
  <p>¡Gracias por contactar conmigo! Recibirás una respuesta en breve.</p>`
    : `
  <h1>Contact to Jero</h1>
  <p>Thank you for contact me, ${username}.</p>
  <p>Your message is:</p>
  <p>${content}</p>
  <p>Thank you for contact me! You will receive response soon.</p>`
}
