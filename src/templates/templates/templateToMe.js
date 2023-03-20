export const templateToMe = (
  name,
  message,
  email
) => `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //ES" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title></title>
  </head>
  <body>
    <h1>Contacto de ${name} desde www.jerogassan.dev</h1>
    <br />
    <p>El mensaje es el siguiente:</p>
    <hr />
    <p>${message}</p>
    <hr />
    <br />
    <p>El email de contacto es: ${email}</p>
  </body>
</html>`
